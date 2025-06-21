import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/sports", async (req, res) => {
  try {
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const rapidApiHost = process.env.RAPIDAPI_HOST;

    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5",
      params: { page: 2 },
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": rapidApiHost
      }
    };

    console.log({
      "x-rapidapi-key":
        rapidApiKey || "29ae09fb30mshfca570d0443b30dp1b0d71jsnbdc82118dedd",
      "x-rapidapi-host": rapidApiHost
    });

    const response = await axios.request(options);
    res.json(response.data); // Send the football API JSON response to client
  } catch (error) {
    console.error("Error fetching football data:", error.message);
    res.status(500).json({ error: "Failed to fetch football data" });
  }
});

export default router;
