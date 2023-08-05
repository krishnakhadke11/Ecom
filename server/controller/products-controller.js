import Products from '../model/productSchema.js'

export const getProducts = async(req,res)=>{
    try{
        // console.log(req)
        const prod = await  Products.find({})
        res.json(prod)
    }catch(err){
        console.log(err);
    }
}

export const getProductById = async(req, res)=>{
    try{
        const product = await Products.findOne({'id' : req.params.id})
        res.status(200).json(product);
    }catch(err){
        res.status(500).json({ message: err.message});
    }
}