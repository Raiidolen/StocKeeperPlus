import express from "express";
import { login } from "../controller/auth.js";
import { checkJWT } from "../middleware/identification/checkJWT.js";
import { readUserByEmail } from "../controller/auth.js";
import { addUser } from "../controller/userORM.js";
import { userValidatorMiddleware as PVM } from "../middleware/userValidation.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", checkJWT, (req, res) => {
  res.json({ message: "Le check JWT a fonctionné ✅", user: req.user });
});

router.post("/log", checkJWT, PVM.userToAdd, addUser);


export default router;
