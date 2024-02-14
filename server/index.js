import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import productRoute from './routes/products.js'
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection is succesful.."))
.catch((err)=>{
    console.log(err)
})


app.use(express.static(join(__dirname, '/')));


//middleware
app.use(express.json())
app.use(cors({
    // origin: "http://localhost:5173"
    origin: "https://self-service-order-liard.vercel.app"

}))



app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)



app.listen(process.env.PORT || 5000, () => {
    console.log("connected backend..." + process.env.PORT)
})

