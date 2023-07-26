import axios from "axios";
import * as actionTypes from '../constants/productConstants'
const URL = "http://localhost:5000";

export const getProducts = () => async(dispatch) => {
    try{
        let { data } = await axios.get(`${URL}/getProducts`)
        dispatch({ type : actionTypes.GET_PRODUCTS_SUCCES, payload : data})
    }
    catch(error){
        dispatch({ type : actionTypes.GET_PRODUCTS_FAIL, payload : error.message})
    }
}