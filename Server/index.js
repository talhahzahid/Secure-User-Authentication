import dotenv from "dotenv";
dotenv.config();
import express, { urlencoded } from "express";
const app = express();
const port = process.env.PORT;
import connectdb from './src/db/index.js';
import userRouter from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(urlencoded({ extended: false }))
app.use(express.json());
app.use(cookieParser());
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.send("SERVER IS RUNNING AT PORT 8000");
});

// Connect to the database and start the server
connectdb()
    .then(() => {
        app.listen(port, () => {
            console.log("SERVER IS RUNNING AT PORT", port);
        });
    })
    .catch((err) => {
        console.log(err);
    });
