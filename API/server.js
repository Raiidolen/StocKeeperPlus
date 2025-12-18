import express from "express";
import cors from "cors";
import Router from "./route/index.js";
import path from 'path';
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();
const port = 3001;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json());
app.use(cookieParser());
app.use('/images', express.static(path.join(process.cwd(), 'uploads/images')));
app.use(Router);




app.listen(port, () => {
    console.log(`StocKeeper+API listening at http://localhost:${port}`);
});
