import axios from "axios";
import * as actionTypes from '../constants/cartConstants'
const URL = "http://localhost:5000";

export const showCart = (auth_token) => async(dispatch) => {
    try{
        const { data } = await axios.get(`${URL}/cart`, {
            headers : {
                'auth_token' : auth_token
            }
        });
        console.log(data)
        
        dispatch({ type : actionTypes.ADD_TO_CART, payload : {...data }});
    }
    catch(error){
        dispatch({ type : actionTypes.ADD_TO_CART_ERROR, payload : error.message });
    }
}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type : actionTypes.REMOVE_FROM_CART, payload : id });
}