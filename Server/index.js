import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    console.log("SERVER IS RUNNING AT PORT 8000");
})

app.listen(port, () => {
    console.log("SERVER IS RUNNING AT PORT", port);
})