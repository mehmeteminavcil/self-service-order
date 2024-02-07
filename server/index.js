import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import  productRoute from './routes/products.js'
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection is succesful.."))
.catch((err)=>{
    console.log(err)
})



app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("connected backend...")
})

