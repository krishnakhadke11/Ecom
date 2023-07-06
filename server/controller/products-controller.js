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