import { check } from "../utils/hashUtils.js";
import { sign } from "../utils/jwt.js"; 
import prisma from "../database/databaseORM.js";

export const readUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: { mail: email }
  });
};

export const readPerson = async ({ email, password }) => {
  const user = await readUserByEmail(email);
  if (!user) return null;

  const isValid = await check(user.password, password);
  if (!isValid) return null;

  return {
    email: user.mail,
    role: user.isadmin ? "admin" : "client",
  };
};

export const login = async (req, res) => {
  try {
    const person = await readPerson(req.body);
    if (!person)
      return res.status(401).json({ message: "Email ou mot de passe invalide" });

    const payload = { email: person.email, role: person.role };
    const jwt = sign(payload, { expiresIn: "8h" });

    res.cookie("jwt", jwt, {
      httpOnly: true,
      secure:false,
      sameSite: "Lax",
      maxAge: 8 * 60 * 60 * 1000 // car le temps est en mili sec
    })

    res.status(200).json({ message: "Connexion réussie" });
  } catch (err) {
    console.error("Erreur login :", err);
    res.sendStatus(500);
  }
};
