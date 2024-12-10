

import users from "../models/user.models.js";



const signUp = async (req, res) => {
    const { fullname, email, password } = req.body
    if (!email) return res.status(400).json({ "message": "Email is required" });
    if (!password) return res.status(400).json({ "message": "Password is required" });
    try {
        const user = users.findOne({ email })
        if (user) return res.status(404).json({ "message": "email is already exixt " })
        await users.create({
            fullname, email, password,
        })
        res.status(200).json({ message: "you are register successfully" })
    } catch (error) {
        console.log(error);
        res.json({ message: "error occured" })
    }
}















export { signUp }