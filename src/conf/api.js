import axios from "axios";

// Base URL for the API
const BASE_URL = "https://api-cars.abolfazlrabiei.ir/api/cars/";

// Function to fetch car data with pagination
export const fetchCarData = async ({ page, limit }) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { page, limit }, // Pagination parameters
    });

    const cars = response.data.items || [];
    const totalCount = response.data.total || 1; // Total number of cars
    console.log(totalCount);
    const totalPages = Math.ceil(totalCount / limit); // Calculate total pages

    return {
      cars,
      totalPages,
      currentPage: page,
    };
  } catch (error) {
    throw new Error("Failed to fetch car data");
  }
};

// Function to fetch car details by ID
export const fetchCarDetailsById = async (id) => {
  try {
    console.log("Fetching car details for ID:", id);

    const response = await axios.get(`${BASE_URL}${id}`);

    console.log("Car Details Response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching car details:", error);
    throw new Error("Failed to fetch car details");
  }
};

export async function createNewCar() {
  const API_URL = "https://api-cars.abolfazlrabiei.ir/api/cars";
  const IMAGE_FILE_PATH = "1.jpg"; // Note: In browser, this would come from input

  const nameInput = document.querySelector("#carName");
  const yearInput = document.querySelector("#year");
  const brandInput = document.querySelector("#brand");
  // const modelInput = document.querySelector("#model");
  // const motorInput = document.querySelector("#price");
  const priceInput = document.querySelector("#price");

  // Car data matching your CarCreate model
  const carData = {
    name: nameInput.value,
    make: brandInput.value,
    // model: modelInput.value,
    year: yearInput.value,
    price: priceInput.value,
  };

  // Simulate file upload (in browser, this comes from <input type="file">)
  const fileInput = document.querySelector("#file-input"); // Use an HTML input to select the file
  const file = fileInput.files[0] || IMAGE_FILE_PATH;

  if (!file) {
    console.error("No file selected.");
    return;
  }

  const formData = new FormData();

  formData.append("car_data", JSON.stringify(carData)); // Send JSON string
  formData.append("main_image", file); // Append the file

  console.log(carData);

  try {
    console.log("Sending request...");
    const response = await fetch(API_URL, {
      method: "POST",
      body: formData, // Automatically sets content-type to multipart/form-data
    });

    const result = await response.json();

    console.log("Status Code:", response.status);
    console.log("Response Body:", result);

    return result;
  } catch (error) {
    console.error("Error creating car:", error.message);
    throw error;
  }
}

export async function deleteCar(uniqe) {
  const response = await axios.delete(BASE_URL+`${uniqe}`);
  return response.status;
}
