import express from "express"
import Product from "../models/Product.js";
import upload from "./upload.js"

const router = express.Router()


// Get All Products

router.get("/",async (req,res)=>{
    try{
        const allproducts = await Product.find({})
        res.status(200).json(allproducts)
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})






// Add New Product

router.post("/addproduct", upload.single("image"), async (req, res) => {
    const { name, desc, category, price, rating } = req.body;
    const imagePath = req.file.path; // Save file path to the database
  
    const newProduct = new Product({
      name,
      desc,
      category,
      price,
      rating,
      image: imagePath,
    });
  
    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });






export default router;