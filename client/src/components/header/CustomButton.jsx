import React, { useState, useContext } from 'react'
import { Box, Button, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from '@emotion/styled';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';

//components
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)(({ theme }) => ({
    display : 'flex',
    margin : '0 3% 0 auto',
    '& > *': {
        marginRight : 40,
        fontSize : 16,
        alignItems : 'center',
          },
          '@media (max-width: 992px)': {
            display : 'block'
           }
}))
    

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    '@media (max-width: 992px)': {
        display : 'block'
      }
}));


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

    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} />
            : <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>
        }
        <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container>
            <ShoppingCartIcon/>
            <Typography>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton