import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        userId:{type:String,required:true},
        
        products:[{
            productId: {
                type:String
            },
            quantity:{
                type:Number,
                default:1,
            }

        }
        
    ],
    amount:{type:Number,required:true},
    },
    {
        timestamps:true
    }
)

export default mongoose.model("Order",orderSchema)