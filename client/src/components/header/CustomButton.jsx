import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
    display : flex;
    margin : 0 3% 0 auto;
    & > button, & > p, & > div{
        margin-right : 40px;
        font-size : 16px;
        align-items : center;
    }
`

const LoginButton = styled(Button)`
    color : #2874f0;
    background : #fff;
    text-transform : none;
    padding : 5px 40px;
    border-radius : 2px;
    box-shadow : none;
    font-weight : 600;
    height : 30px
`

function CustomButton() {
  return (
    <Wrapper>
        <LoginButton variant=''>Login</LoginButton>
        <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Box style={{display:"flex"}}>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Box>
    </Wrapper>
  )
}

export default CustomButton