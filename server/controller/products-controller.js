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

export const getProductById = async(request, response)=>{
    try{
        // console.log(req)
        const id = request.params.id;
        const product = await Products.findOne({'id' : id})

        response.status(200).json(product);
    }catch(err){
        response.status(500).json({ message: err.message});
    }
}