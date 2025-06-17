import express from "express";
import cors from "cors";
import { verifyFirebaseToken } from "./middleware/auth"; // <-- Import here

const app = express();

app.use(cors());
app.use(express.json());

// Public route
app.get("/", (req, res) => {
  res.send("API is running");
});

// Protected route using the middleware
app.get("/protected", verifyFirebaseToken, (req, res) => {
  res.json({ message: "This is a protected route", user: (req as any).user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
