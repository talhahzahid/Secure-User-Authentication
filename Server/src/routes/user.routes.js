import express from "express"
import { loginUser, signUp } from "../controllers/user.controllers.js"

const router = express.Router()

router.post('/signup', signUp)
router.post('/signin', loginUser)


export default router 