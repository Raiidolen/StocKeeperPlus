import express from "express";
import { login } from "../../controller/auth.js";
import { checkJWT } from "../../middleware/identification/checkJWT.js";

import { addUser } from "../../controller/userORM.js";
import { userValidatorMiddleware as PVM } from "../../middleware/userValidation.js";
import { checkAdmin } from "../../middleware/identification/checkAdmin.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", checkJWT, (req, res) => {
  res.json({ message: "Le check JWT a fonctionné", user: req.user });
});

router.post("/log", checkJWT, checkAdmin, PVM.userToAdd, addUser);


export default router;