import Product from './model/productSchema.js';
import { products } from './constants/products.js';

const DefaultData = async () => {
    try {
        // await Product.deleteMany({});
        await Product.insertMany(products);

        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log("default Data already inserted");
    }
}

export default DefaultData;