from fastapi import APIRouter, Depends, UploadFile, Form,  File, HTTPException , Query
from typing import Annotated
from sqlalchemy.sql import func
from sqlalchemy import Integer , String
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload , defer
from typing import List
from app.config import BUCKET_NAME, ACCESS_KEY, SECRET_KEY, ENDPOINT , CLOUD_CUSTOM_PREFIX
from app.database import get_db
from app.models import Car, CarImage , User
from urllib.parse import urlparse
from app.auth import get_current_user
from app.schemas import CarCreate, CarUpdate, CarResponse , PaginatedCarResponse
import uuid
import boto3

# Create an API router
router = APIRouter()

# Initialize S3 client for AWS S3 or compatible services
s3_client = boto3.client(
    "s3",
    endpoint_url=ENDPOINT,
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY
)


@router.post("/cars", response_model=CarResponse, status_code=201)
async def create_car(
    main_image: UploadFile = File(...),           # File upload for main_image
    car_data: str = Form(...),                   # Car data as a JSON string
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Create a new car with optional images and a main image.

    Args:
        main_image (UploadFile): The main image file to upload.
        car_data (str): The car data serialized as a JSON string.
        db (AsyncSession): An asynchronous database session.

    Returns:
        CarResponse: The newly created car with its associated images and main image URL.
    """
    try:
        # Parse the JSON string into the CarCreate model
        car = CarCreate.model_validate_json(car_data)  # Deserialize and validate
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Invalid car data: {str(e)}")

    # Generate a unique key for the main image
    file_extension = main_image.filename.split('.')[-1]
    image_key = f"cars/{uuid.uuid4()}.{file_extension}"

    # Infer content type if not provided
    content_type = main_image.content_type or "image/jpeg"

    try:
        # Upload the main image to S3
        s3_client.upload_fileobj(
            main_image.file,
            BUCKET_NAME,
            image_key,
            ExtraArgs={"ContentType": content_type, "ACL": "public-read"},
        )
        main_image_url = f"{CLOUD_CUSTOM_PREFIX}/{image_key}"
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to upload main image: {str(e)}")

    # Create the car object including the main image URL
    car_dict = car.model_dump(exclude={"images"})
    car_dict["main_image"] = main_image_url  # Override the main_image field
    car_dict["owner_id"] = current_user.id

    new_car = Car(**car_dict)
    db.add(new_car)
    await db.commit()
    await db.refresh(new_car)

    # Handle associated images (if any)
    if car.images:
        for image_data in car.images:
            new_image = CarImage(car_id=new_car.id, image_url=image_data.image_url)
            db.add(new_image)
        await db.commit()

    # Retrieve the car with its associated images
    stmt = select(Car).options(selectinload(Car.images)).where(Car.id == new_car.id)
    result = await db.execute(stmt)
    car_with_images = result.scalar_one_or_none()

    return car_with_images

@router.get("/cars/{car_id}", response_model=CarResponse)
async def get_car(car_id: int, db: AsyncSession = Depends(get_db)):
    """
    Retrieve a single car by ID with its associated images.

    Args:
        car_id (int): The ID of the car to retrieve.
        db (AsyncSession): An asynchronous database session.

    Returns:
        CarResponse: The car object with its associated images.

    Raises:
        HTTPException: If the car is not found.
    """
    stmt = select(Car).options(selectinload(Car.images)).where(Car.id == car_id)
    result = await db.execute(stmt)
    car = result.scalar_one_or_none()

    if not car:
        raise HTTPException(status_code=404, detail="Car not found")

    return car


@router.get("/cars", response_model=PaginatedCarResponse)
async def get_all_cars(
    page: int = Query(1, ge=1, description="Page number"),
    limit: int = Query(10, ge=1, le=100, description="Items per page"),
    db: AsyncSession = Depends(get_db)
):
    """
    Retrieve a list of cars with pagination based on the page size.

    Args:
        page_size (int): Items per page (default: 10, max: 100).
        db (AsyncSession): An asynchronous database session.

    Returns:
        List[PaginatedCarResponse]: List of cars.
    """
    offset = (page - 1) * limit
    # Base query to fetch cars with their associated images
    stmt = select(Car).options(selectinload(Car.images))

    total_query = select(func.count()).select_from(stmt.subquery().alias())
    total_result = await db.execute(total_query)
    total = total_result.scalar()

    # Apply pagination using only page_size
    stmt = stmt.offset(offset).limit(limit)

    # Execute query
    result = await db.execute(stmt)
    cars = result.scalars().all()

    return {
        "items": cars,
        "total": total,
        "page": page,
        "page_size": limit
    }

@router.get("/filter", response_model=PaginatedCarResponse)
async def get_filtered_cars(
    page: int = Query(1, ge=1, description="Page number"),
    page_size: int = Query(10, ge=1, le=100, description="Items per page"),
    sort_order: str = Query("asc", regex="^(asc|desc)$", description="Sort by ID (asc/desc)"),
    make: str = Query(None, description="Filter by car make (e.g., 'Toyota')"),
    motor: str = Query(None, description="Filter by car motor type (e.g., 'V6', 'V8', 'Electric Motor')"),
    model : str = Query(None, description="Filter by car model type "),
    min_year: int = Query(None, description="Filter cars with year ≥ [value]"),
    max_year: int = Query(None, description="Filter cars with year ≤ [value]"),
    min_speed: int = Query(None, description="Filter cars with speed ≥ [value]"),
    max_speed: int = Query(None, description="Filter cars with speed ≤ [value]"),
    min_price: float = Query(None, description="Filter cars with price ≥ [value]"),
    max_price: float = Query(None, description="Filter cars with price ≤ [value]"),
    is_electric: bool = Query(None, description="Filter cars that are electric (true/false)"),
    is_bulletproof: bool = Query(None, description="Filter cars that are bulletproof (true/false)"),
    db: AsyncSession = Depends(get_db)
):
    """
    Retrieve a paginated, sorted, and filtered list of cars with their associated images.

    Args:
        page (int): Page number (default: 1).
        page_size (int): Items per page (default: 10, max: 100).
        sort_order (str): Sort cars by ID in 'asc' or 'desc' order.
        make (str): Filter cars by make (exact match).
        min_year (int): Filter cars with year ≥ [value].
        max_year (int): Filter cars with year ≤ [value].
        min_speed (int): Filter cars with speed ≥ [value].
        max_speed (int): Filter cars with speed ≤ [value].
        min_price (float): Filter cars with price ≥ [value].
        max_price (float): Filter cars with price ≤ [value].
        is_electric (bool): Filter cars that are electric (true/false).
        is_bulletproof (bool): Filter cars that are bulletproof (true/false).
        db (AsyncSession): An asynchronous database session.

    Returns:
        PaginatedCarResponse: Paginated, sorted, and filtered list of cars with metadata.
    """
    offset = (page - 1) * page_size

    # Base query with optional filters
    stmt = select(Car).options(selectinload(Car.images))
    
    # Apply filters
    if make:
        stmt = stmt.filter(Car.make == make)
    if motor:
        stmt = stmt.filter(Car.motor == motor)
    if model:
        stmt = stmt.filter(func.cast(func.split_part(Car.name, " ", 2), String) == model)
    if min_year:
        stmt = stmt.filter(Car.year >= min_year)
    if max_year:
        stmt = stmt.filter(Car.year <= max_year)
    if min_speed:
        stmt = stmt.filter(func.cast(func.split_part(Car.max_speed, " ", 1), Integer) >= min_speed)
    if max_speed:
        stmt = stmt.filter(func.cast(func.split_part(Car.max_speed, " ", 1), Integer) <= max_speed)
    if min_price:
        stmt = stmt.filter(Car.price >= min_price)
    if max_price:
        stmt = stmt.filter(Car.price <= max_price)
    if is_electric is not None:  # Handle both True and False cases
        stmt = stmt.filter(Car.is_electric == is_electric)
    if is_bulletproof is not None:  # Handle both True and False cases
        stmt = stmt.filter(Car.is_bulletproof == is_bulletproof)
    
    # Apply sorting
    stmt = stmt.order_by(Car.id.asc() if sort_order == "asc" else Car.id.desc())

    # Get total count of filtered cars
    total_query = select(func.count()).select_from(stmt.subquery().alias())
    total_result = await db.execute(total_query)
    total = total_result.scalar()

    # Apply pagination
    stmt = stmt.offset(offset).limit(page_size)

    # Execute query
    result = await db.execute(stmt)
    cars = result.scalars().all()

    return {
        "items": cars,
        "total": total,
        "page": page,
        "page_size": page_size
    }
def extract_s3_key(url: str) -> str:
    """Extract the S3 object key from the full image URL."""
    parsed_url = urlparse(url)
    path = parsed_url.path  # e.g., "/cars/uuid.jpg"
    return path.lstrip("/")

@router.put("/cars/{car_id}", response_model=CarResponse, status_code=200)
async def update_car(
    car_id: int,
    car_data: Annotated[str, Form(...)],  # JSON string of CarUpdate
    main_image: UploadFile | None = File(None),  # Optional new image
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    try:
        car_update = CarUpdate.model_validate_json(car_data)
    except Exception as e:
        raise HTTPException(status_code=422, detail=f"Invalid car data: {str(e)}")

    stmt = select(Car).where(Car.id == car_id)
    result = await db.execute(stmt)
    car = result.scalar_one_or_none()

    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    if car.owner_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
    # Update simple fields
    for key, value in car_update.model_dump(exclude_unset=True).items():
        setattr(car, key, value)

    # Handle image upload (if provided)
    if main_image:
        # Step 1: Delete old image from S3 if it exists
        if car.main_image:
            try:
                old_image_key = extract_s3_key(car.main_image)
                s3_client.delete_object(Bucket=BUCKET_NAME, Key=old_image_key)
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Failed to delete old image: {str(e)}")

        # Step 2: Upload new image
        file_extension = main_image.filename.split('.')[-1]
        new_image_key = f"cars/{uuid.uuid4()}.{file_extension}"
        content_type = main_image.content_type or "image/jpeg"

        try:
            s3_client.upload_fileobj(
                main_image.file,
                BUCKET_NAME,
                new_image_key,
                ExtraArgs={"ContentType": content_type, "ACL": "public-read"},
            )
            car.main_image = f"{CLOUD_CUSTOM_PREFIX}/{new_image_key}"
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Image upload failed: {str(e)}")

    # Commit changes
    await db.commit()
    await db.refresh(car)

    # Reload with images
    stmt = select(Car).options(selectinload(Car.images)).where(Car.id == car_id)
    result = await db.execute(stmt)
    car_with_images = result.scalar_one_or_none()

    return car_with_images

@router.delete("/cars/{car_id}", response_model=dict, status_code=200)
async def delete_car(car_id: int, db: AsyncSession = Depends(get_db) , current_user: User = Depends(get_current_user)):
    # Fetch car with images
    stmt = select(Car).where(Car.id == car_id).options(selectinload(Car.images))
    result = await db.execute(stmt)
    car = result.scalar_one_or_none()

    if not car:
        raise HTTPException(status_code=404, detail="Car not found")
    if car.owner_id != current_user.id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")
    # Collect all image keys
    keys_to_delete = []

    if car.main_image:
        keys_to_delete.append(extract_s3_key(car.main_image))

    if car.images:
        for img in car.images:
            if img.image_url:
                keys_to_delete.append(extract_s3_key(img.image_url))

    keys_to_delete = list(set(keys_to_delete))  # Deduplicate

    # Delete files one by one
    failed_deletions = []
    for key in keys_to_delete:
        try:
            s3_client.delete_object(Bucket=BUCKET_NAME, Key=key)
        except Exception as e:
            failed_deletions.append({"key": key, "error": str(e)})

    if failed_deletions:
        raise HTTPException(
            status_code=500,
            detail=f"Failed to fully delete S3 files: {failed_deletions}"
        )

    # Finally delete the car
    await db.delete(car)
    await db.commit()

    return {"message": f"Car {car_id} and associated files deleted successfully"}