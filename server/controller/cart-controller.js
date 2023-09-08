import Cart from '../model/cartSchema.js'
export const getCartProducts = async (req,res)=>{
    try {
        const products = await Cart.find({user:req.user.id});
        res.json(products);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error getCart");
    }
}
export const addCartProducts = async (req,res)=>{
    try {
        const {productId,isDec} = req.body;
        let checkExist = await Cart.find({user:req.user.id,productId:productId})
        // console.log(checkExist)
        if(checkExist.length>0 && !isDec){
                await Cart.updateOne({user:req.user.id,productId:productId},{
                $inc:{
                    quantity:1
                }
            })
            checkExist[0].quantity=checkExist[0].quantity+1;
            return res.status(200).json(checkExist);
        }else if(checkExist.length>0 && checkExist[0].quantity>1 && isDec){
                await Cart.updateOne({user:req.user.id,productId:productId},{
                $inc:{
                    quantity:-1
                }
            })
            checkExist[0].quantity=checkExist[0].quantity-1;
            return res.status(200).json(checkExist);
        }else if(checkExist.length>0 && checkExist[0].quantity==1 && isDec){
            return res.status(500).send("You can cannot decrement further")
        }
        const prod = await Cart.create({
            user:req.user.id,
            productId:productId
        })
        res.status(200).json(prod)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error addcart");
    }
  
}
export const deleteCartProduct = async (req,res) =>{
    try {
        let itemId = { productId : req.params.id};
        let product = await Cart.find(itemId);
        console.log(product);
        if(!product){
            return res.status(404).send("Not Found")
        }
        if (product[0].user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        product = await Cart.findOneAndDelete(itemId);
        res.json({ "Success": "Product has been deleted", product: product });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
}