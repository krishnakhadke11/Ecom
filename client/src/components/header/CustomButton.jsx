import React, { useState, useContext, useEffect } from 'react'
import { Badge, Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';
import Cookies from 'js-cookie';

//components
import LoginDialog from '../login/LoginDialog';

 
const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        fontSize: 16,
        alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    textDecoration : 'none',
    color : 'inherit',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


const LoginButton = styled(Button)({
    color : "#f85721",
    background : "#fff",
    textTransform : "none",
    padding : "5px 40px",
    borderRadius : "2px",
    boxShadow : "none",
    fontWeight : "600",
    height : "35px",
    "&:hover" : {
        background : "#f85721",
        color : "#fff"
    }
})

function CustomButton() {

    const [open, setOpen] = useState(false);
    const { account, setAccount, setToken } = useContext(DataContext);

    useEffect(() => {
        const userCookie = Cookies.get('auth_token');
        if(userCookie){
            const user = JSON.parse(userCookie);
            setAccount(user.username);
        }
    }, [account])

    const openDialog = () => {
        setOpen(true);
    }
    const { cartItems } = useSelector(state => state.cart); 

  return (
    <Wrapper>
        {
            account ? <Profile account={account} setAccount={setAccount} setToken={setToken} />
            : <LoginButton variant='contained' onClick={openDialog}>Login</LoginButton>
        }
        <Typography style={{marginTop:3, width:135}}>Become a Seller</Typography>
        <Typography style={{marginTop:3}}>More</Typography>
        <Container to='/cart'>
            <Badge badgeContent={cartItems[0]?.length} color='secondary'>
                <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft : 10 }}>Cart</Typography>
        </Container>
        <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  )
}

export default CustomButton