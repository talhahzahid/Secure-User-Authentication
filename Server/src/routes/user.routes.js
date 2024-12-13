import express from "express"
import { loginUser, logOut, signUp } from "../controllers/user.controllers.js"
import checkTokenFromUser from '../middleware/user.middleware.js'

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', loginUser)
router.get('/logout', logOut)
router.get("/protected", checkTokenFromUser, (req, res) => {
    res.json({ message: "Welcome to the protected route", user: req.user });
});



export default router 