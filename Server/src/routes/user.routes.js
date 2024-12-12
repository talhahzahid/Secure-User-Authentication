import express from "express"
import { loginUser, logOut, signUp } from "../controllers/user.controllers.js"

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', loginUser)
router.get('/logout', logOut)


export default router 