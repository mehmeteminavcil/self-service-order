import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import multer from "multer"
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


//middleware
app.use(express.json())

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,"public/products")
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload = multer({storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    try {
        return res.status(200).json("file uploaded")
    } catch (error) {n
        console.log(error)
    }
})

app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/products",productRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("connected backend...")
})

