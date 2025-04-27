import axios from "axios";

// Base URL for the API
const BASE_URL = "https://api-cars.abolfazlrabiei.ir/api/filter/";

// Function to fetch car data with pagination
export const fetchCarData = async ({ page, limit, ...formData }) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { page, limit, ...formData }, // Pagination parameters
    });

    const cars = response.data.items || [];
    const totalCount = response.data.total || 0; // Total number of cars
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
