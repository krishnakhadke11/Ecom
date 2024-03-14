import axios from 'axios';

const URL = "http://localhost:5000";


export const authenticateSignup = async(data) => {
    try{
        
        return await axios.post(`${URL}/signup`, data);
    }
    catch(error){
        console.log("error while authenticating signup : ", error);
    }
}

export const authenticateLogin = async(data) => {
    try{
        return await axios.post(`${URL}/login`, data);
    }
    catch(error){
        console.log("error while authenticating login : ", error);
        return error.response;
    }
}

export const payUsingPaytm = async(data) => {
    try{
        let response =  await axios.post(`${URL}/payment`, data);
        return response.data;
    }
    catch(error){
        console.log("error while calling paytm api ", error); 
    }
}

export const addToCart = async(productId, isDec, auth_token) =>{
    try{
        let response = await axios.post(`${URL}/addCart`, {productId, isDec}, {
            headers : {
                'auth_token' : auth_token
            }
        })
        console.log(response);
        return response.data;
    }
    catch(error){
        console.log("error while adding to cart : ", error)
    }
}

export const removeFromCart = async(productId, auth_token) => {
    try{
        let response = await axios.delete(`${URL}/deleteCartProd/${productId}`, {
            headers : {
                'auth_token' : auth_token
            }
        })
        console.log(response)
        return response;
    }
    catch(error){
        console.log("error while removing products : ", error.message);
    }
}
/* Razory Pay */
export const razorPayCheckout = async(data) => {
    try{
        let response =  await axios.post(`${URL}/checkout`, data);
        // data will contain -- > amount

        return response;
    }
    catch(error){
        console.log("error while calling paytm api ", error); 
    }
}
// const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

/* Razory Pay End */