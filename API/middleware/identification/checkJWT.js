/**
 * @swagger
 * components:
 *  securitySchemes:
 *      cookieAuth:
 *          type: apiKey
 *          in: cookie
 *          name: jwt
 *  responses:
 *      UnauthorizedError:
 *          description: Access token is missing or invalid
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          error:
 *                              type: string
 *                              example: Non authentifié (cookie manquant)
 */

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