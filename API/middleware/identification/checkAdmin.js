/**
 * @swagger
 * components:
 *   responses:
 *     ForbiddenError:
 *       description: Access forbidden – admin role required
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               error:
 *                 type: string
 *                 example: Accès refusé
 */

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