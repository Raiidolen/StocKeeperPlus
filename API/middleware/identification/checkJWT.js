import { verify } from "../../utils/jwt.js"

export const checkJWT = async (req, res, next) => {
    
    const token = req.cookies?.jwt;
    
    if (!token) {
        return res.status(401).json({ error: "Non authentifié (cookie manquant)" });
    }

    try {
        req.user = verify(token);
        next();
    } catch (e) {
        res.status(401).json({ error: "JWT invalide ou expiré" });
    }
};