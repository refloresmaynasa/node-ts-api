import cors from "cors";
import "dotenv/config";
import express from "express";
import db from "./config/mongo";
import { router } from "./routes";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

db()
  .then(() => console.log("MongoDB connection is ready"))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Service is running on port ${PORT}`));
