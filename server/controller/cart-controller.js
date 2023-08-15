import Cart from '../model/cartSchema.js'
export const getCartProducts = async (req,res)=>{
    try {
        const products = await Cart.find({user:req.user.id});
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}
export const addCartProducts = async (req,res)=>{
    try {
        const {productId} = req.body;
        let checkExist = await Cart.find({user:req.user.id,productId:productId})
        // console.log(checkExist)
        if(checkExist.length>0){
           let res =  await Cart.updateOne({user:req.user.id,productId:productId},{
                $inc:{
                    quantity:1
                }
            })
            return res.status(200).json(res);
        }
        const prod = await Cart.create({
            user:req.user.id,
            productId:productId
        })
        res.status(200).json(prod)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
  
}
export const deleteCartProduct = async (req,res) =>{
    try {
        let product = await Cart.findById(req.params.id);
        if(!product){
            return res.status(404).send("Not Found")
        }
        if (product.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        product = await Cart.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Product has been deleted", product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}