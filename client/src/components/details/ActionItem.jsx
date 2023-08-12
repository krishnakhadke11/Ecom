import { Box, Button, styled } from '@mui/material';

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/cartActions'
import{ ShoppingCart as Cart,  FlashOn as Flash} from '@mui/icons-material';

import { payUsingPaytm  } from '../../service/api';

const LeftContainer = styled(Box)(({ theme })=>({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  width : 400,
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px'
  }
}));

const Image = styled('img')({
  width: '95%',
    padding: '15px'
});

const Styledbutton = styled(Button)(({ theme }) => ({
  width: '47%',
  height: 50,
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '45%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '47%'
  }
}));

const ActionItem = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () =>{
    dispatch(addToCart(id, quantity))
    navigate('/cart');
  }

  const buyNow = () => {
    let response = payUsingPaytm({ amount: 500, email: 'mounika@gmail.com'});
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process', 
      params: response
    }
  }

  return (
    <LeftContainer>
        <Box style={{ padding: '15px 20px',  border: '1px solid #f0f0f0', width: '90%'}}>
      <Image src={product.detailUrl} alt = "product"/>
      </Box>
      <Styledbutton variant = "contained" onClick={()=> addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><Cart/>Add to Cart</Styledbutton>
      <Styledbutton  variant = "contained" onClick={() => buyNow()} style={{marginRight: 10, background: '#fb541b'}}><Flash/>Buy Now</Styledbutton>
    </LeftContainer>
  )
}

export default ActionItem
