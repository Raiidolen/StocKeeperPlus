import express from "express";
import cors from "cors";
import Router from "./route/index.js";
import "dotenv/config";

const app = express();
const port = 3001;

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.use(Router);

app.listen(port, () => {
    console.log(`StocKeeper+API listening at http://localhost:${port}`);
});
