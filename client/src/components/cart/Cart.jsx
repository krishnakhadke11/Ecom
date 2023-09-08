import React, { useEffect, useContext, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux';
import { DataContext } from '../../context/DataProvider';
import { showCart } from '../../redux/actions/cartActions';
import { Grid, Typography, Box, styled, Button } from '@mui/material'
import Cookies from 'js-cookie';

import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';

const Container = styled(Grid)(({ theme }) => ({
  padding: '30px 135px',
  [theme.breakpoints.down('md')]: {
      padding: '15px 0'
  }
}));

const LeftContainer = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down('md')]: {
      marginBottom: 15
  }
}));

const Header = styled(Box)`
  padding : 15px 24px; 
  background : #fff;
`

const ButtonWrapper = styled(Box)`
  padding : 16px 22px;
  background : #fff;
  box-shadow : 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top : 1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
  display : flex;
  margin-left : auto;
  background : #fb641b;
  color : #fff;
  width : 250px;
  height : 51px;
  border-radius : 2px; 
`

function Cart() {

  const { token, setToken } = useContext(DataContext)
  const dispatch = useDispatch();

  const {cartItems} = useSelector(state => state.cart);
  const {products} = useSelector(state => state.getProducts);
  const [items, setItems] = useState([]);
  useEffect(()=>{
    const token = Cookies.get('auth_token');
    if(token){
      const user = JSON.parse(token)
      dispatch(showCart(user.auth_token));
      setToken(user.auth_token);
    }
    const matchingObjects = products.filter(obj1 => {
      const obj2 = cartItems[0]?.find(obj2 => obj2.productId === obj1.id);
      return obj2 !== undefined; // If obj2 is found, it's a match
    });
    console.log(matchingObjects)
    setItems(matchingObjects);
  }, [])

  // useEffect(() => {
  //   // const matchingObjects = products.filter(obj1 => {
  //   //   const obj2 = cartItems[0]?.find(obj2 => obj2.productId === obj1.id);
  //   //   return obj2 !== undefined; // If obj2 is found, it's a match
  //   // });
  //   // setItems(matchingObjects);
  // }, [items])
  

  

  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: 'mounika@gmail.com'});
    let information = {
      action: 'https://securegw-stage.paytm.in/order/process', 
      params: response
    }
    post(information)
  }

  return (
    <>
      { items.length ? 
        <Container  container>  
          <LeftContainer item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({items.length})</Typography>
            </Header>
            {
              items.map(item => (
                <CartItem key={item.id} item={item} token={token}/>
              ))
            }
            <ButtonWrapper>
              <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftContainer>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={items}/>
          </Grid>
        </Container> 
        : <EmptyCart/>
    
      }
    </>
  )
}

export default Cart