import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT
import connectdb from './src/db/index.js'
import userRouter from "./src/routes/user.routes.js"

app.use(express.json())
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send("SERVER IS RUNNING AT PORT 8000");
})

connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("SERVER IS RUNNING AT PORT", port);
        })
    })
    .catch((err) => {
        console.log(err);
    })