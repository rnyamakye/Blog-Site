import express from "express";
const app = express();
import "dotenv/config";
import cors from "cors";
import { fileURLToPath } from "url";
import path from "path";
import { readdirSync } from "fs";

const port = process.env.PORT || 8000;
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routesPath = path.resolve(__dirname, "./routes");
console.log(routesPath);

async function loadRoutes() {
  const routeFiles = readdirSync(routesPath);
  for (const file of routeFiles) {
    const routeModule = await import(`./routes/${file}`);
    if (routeModule.default && typeof routeModule.default === "function") {
      app.use("/", routeModule.default);
    } else {
      console.warn(
        `Route file ${file} does not export a default Express router`
      );
    }
  }
}

await loadRoutes();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Admin server running on port ${port}`);
});
