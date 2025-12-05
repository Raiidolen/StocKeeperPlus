import { errors } from "@vinejs/vine";

export const checkAdmin = async (req, res, next) => {
    if (req.user.role === "admin")
    {
        next();
    }
    else
    {
        res.status(403).json({error : "Accès refusé"});
    }
}