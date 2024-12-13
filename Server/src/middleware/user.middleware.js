
import jwt from "jsonwebtoken";

const checkTokenFromUser = (req, res, next) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(401).json({ message: "Token required" });
    }
    jwt.verify(token, process.env.JWT_SECRET_REFRESH, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token" });
        }
        req.user = user;
        next();
    });
};

export default checkTokenFromUser;
