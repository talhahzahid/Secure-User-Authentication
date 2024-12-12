import jwt from "jsonwebtoken"

const checkTokenFromUser = (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) {
        return res.status(400).json({ message: "Token Required" })
    }
    jwt.verify(token, process.env.JWT_SECRET_REFRESH, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Ivalid Token" })
        }
        req.user = user
        res.json({
            message: "User authenticated",
            user: req.user,
            token
        });
    });
}



export default { checkTokenFromUser }