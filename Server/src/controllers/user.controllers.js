import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import users from "../models/user.models.js";

const generateTokenFromUser = (user) => {
    return jwt.sign({ email: user.email }, process.env.JWT_SECRET_REFRESH)
}


const signUp = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email) return res.status(400).json({ "message": "Email is required" });
    if (!password) return res.status(400).json({ "message": "Password is required" });
    try {
        const userExists = await users.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Email is already in use" });
        console.log(userExists);
        await users.create({
            fullname,
            email,
            password
        });
        res.status(201).json({ message: "You are registered successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred during registration" });
    }
};

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    if (!email) return res.status(400).json({ message: "email is required" });
    if (!password) return res.status(400).json({ message: "password is required" });
    try {
        const user = await users.findOne({ email })
        if (!user) return res.status(400).json({ message: "no user exits" });
        const validKey = await bcrypt.compare(password, user.password)
        if (!validKey) return res.status(400).json({ message: "Incorrect password" })
        // generate token from user 
        const token = generateTokenFromUser(user)
        res.json({ message: "Login successfully", token })
    } catch (error) {
        console.log(error);
        res.json({ message: "Eroor occured" })
    }
}





export { signUp, loginUser }