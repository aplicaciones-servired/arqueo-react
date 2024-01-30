import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoute from "./routes/index.routes.js";
import arqueoRoute from "./routes/arqueo.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(indexRoute);
app.use(arqueoRoute);

app.listen(PORT);
console.log(" server is running on port 4000");