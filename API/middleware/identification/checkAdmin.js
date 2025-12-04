
export const checkAdmin = async (req, res, next) => {
    if (req.user.role === "admin")
    {
        next();
    }
    else
    {
        res.status(401).json({ message: "Permission trop faible" });
    }
}