import express from "express";
import cors from 'cors';
import morgan from "morgan";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; // Import to fix __dirname issue
import connectDB from "./database/mongodb.js";
import taskRouter from "./routes/task.routes.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import errorMiddleware from './middleware/error.middleware.js'

const app = express();
app.use(express.json());

app.use(cors())
connectDB()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"), { flags: "a" }
);

app.use(morgan('combined',{stream:accessLogStream}))

app.use("/api/v1/tasks", taskRouter);
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users',userRouter)
app.use(errorMiddleware)

app.use((req, res)=>{
    res.status(404).json({
        success:false,
        data:{message:"Not found."}
    })
})

app.listen(3000, () => {
  console.log("SERVER OK");
});
