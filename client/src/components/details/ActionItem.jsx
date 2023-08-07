import { Box, Button, styled } from '@mui/material';

import React from 'react'

import{ ShoppingCart as Cart,  FlashOn as Flash} from '@mui/icons-material';


const LeftContainer = styled(Box)(({ theme })=>({
  minWidth: '40%',
  padding: '40px 0 0 80px',
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
  return (
    <LeftContainer>
        <Box style={{ padding: '15px 20px',  border: '1px solid #f0f0f0', width: '90%'}}>
      <Image src={product.detailUrl} alt = "product"/>
      </Box>
      <Styledbutton variant = "contained" style={{marginRight: 10, background: '#ff9f00'}}><Cart/>Add to Cart</Styledbutton>
      <Styledbutton  variant = "contained" style={{marginRight: 10, background: '#fb541b'}}><Flash/>Buy Now</Styledbutton>
    </LeftContainer>
  )
}

export default ActionItem
