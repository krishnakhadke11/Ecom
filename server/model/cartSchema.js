import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productId:{
        type:String,
    },
    quantity:{
        type:Number,
        default:1
    }
});

const cart = mongoose.model('cart', cartSchema);

export default cart;