import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/hello", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
