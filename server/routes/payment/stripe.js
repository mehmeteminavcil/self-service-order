import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv"

const router = express.Router()

const stripe = Stripe(process.env.STRIPE_SEC_KEY)

router.post('/checkout', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/`,
      cancel_url: `${process.env.CLIENT_URL}/`,
    });
  
    res.send(JSON.stringify({url:session.url}));
  });

  export default router