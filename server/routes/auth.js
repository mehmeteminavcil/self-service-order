import express from "express"
import User from "../models/User.js"
import AES from "crypto-js/aes.js";
import CryptoJS from "crypto-js"

import jwt from "jsonwebtoken"


const router = express.Router()


// Register 

router.post( "/register", async (req, res) => {
    const newUser = new User({
        email:req.body.email,
        password: AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    });

    try{
        const savedUser = await newUser.save() 
        res.status(201).json(savedUser)
    }catch(err){
        res.status(500).json(err)
    }

})

// Login

router.post( '/login', async (req,res)=>{

    try{
        const user = await User.findOne({email:req.body.email})
        if (!user) {
            return res.status(401).json("Wrong credentials");
        }

        const hashedPassword = AES.decrypt(user.password, process.env.PASS_SEC)

        const basePassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        if(basePassword !== req.body.password){

            return res.status(401).json("wrong credentials")
        }


        const accessToken = jwt.sign(
            {
            id:user._id,
            isAdmin:user.isAdmin,
        },
        process.env.JWT_SEC ,{expiresIn:"3h"}
        )

      
        const { password, ...others } = user._doc; //for mongodb  to not show the password in response
       




        res.status(200).json({...others,accessToken});

    }catch(err){
        res.status(500).json(err)
    }
    
})




export default router;