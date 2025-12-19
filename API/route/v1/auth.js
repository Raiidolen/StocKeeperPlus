import express from "express";
import { login, logout } from "../../controller/auth.js";
import { checkJWT } from "../../middleware/identification/checkJWT.js";


const router = express.Router();

router.post("/login", login);
router.post("/logout", checkJWT, logout);


export default router;