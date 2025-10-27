import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  res.send("La route /login fonctionne !");
});

export default router;
