import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";

import categoriesEndpoints from "./endpoints/categories";
//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

// Endpoints defining section
app.use("/api/categories", categoriesEndpoints);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} 🚀`);
});
