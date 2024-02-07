import express from "express"
import User from "../models/User.js";
import AES from "crypto-js/aes.js";

import {verifyTokenAndAuthorization} from "./verifyToken.js";

const router = express.Router()

router.put("/:id",verifyTokenAndAuthorization, async ( req,res)=>{

   if(req.body.password){
    req.body.password = AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
   }

   try{
    const updatedUser = await User.findByIdAndUpdate(req.params.id ,{
        $set : req.body}, {new: true})  //return the new user info after update

        res.status(200).json(updatedUser)
   }catch(err){
    res.status(500).json(err)
   }
}
)


export default router;