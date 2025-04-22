import axios from "axios";

// Simulated API function
export const fetchPaginationData = async () => {
  // Simulate a delay for the API call
  const response = await axios.get(
    "https://api-cars.abolfazlrabiei.ir/api/cars",
    {
      timeout: 5000, // Optional: Add a timeout
    }
  );
  return response.data; // Expected response: { currentPage: 1, totalPages: 4 }
};