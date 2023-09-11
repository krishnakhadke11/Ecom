import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true,
    },
    productId:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        default:1
    }
});

const cart = mongoose.model('cart', cartSchema);

export default cart;