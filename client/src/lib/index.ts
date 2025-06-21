// getData.js

/**
 * Fetch all news from backend API.
 * @param {string} endpoint - The backend API endpoint to fetch news from.
 * @returns {Promise<Object>} - Resolves with the JSON news data.
 */
export async function getData(endpoint: string) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response?.status} ${response.statusText}`
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Data fetching error:", error);
    throw error;
  }
}
