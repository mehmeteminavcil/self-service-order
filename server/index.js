import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import productsRoute from "./routes/products.js"
import authRoute from "./routes/auth.js"
const app = express()

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection is succesful.."))
.catch((err)=>{
    console.log(err)
})



app.use(express.json())

app.use("/api/auth",authRoute)
app.use("/api/products",productsRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("connected backend...")
})

