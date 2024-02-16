import express from "express";
import {loadStripe} from '@stripe/stripe-js';

const stripe = await loadStripe(process.env.STRIPE_SEC_KEY);


const router = express.Router()

router.post("/payment",(req,res)=>{
  
})



  export default router