import express from "express";
import cors from "cors";
import logger from "morgan";
import routes from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/api", routes);

export default app;
