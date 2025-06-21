import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/economic", async (req, res) => {
  try {
    const apiKey = process.env.NEWS_API_KEY;
    const url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}` ||
      `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${apiKey}`;
    const response = await axios.get(url);
    res.json(response.data); // Pass News API JSON directly to client
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch TechCrunch news" });
  }
});

export default router;
