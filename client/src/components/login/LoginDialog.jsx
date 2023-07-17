import styled from '@emotion/styled';
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { authenticateSignup } from '../../service/api';

const Component = styled(Box)`
    height : 79vh;
    width : 95vh;
    display : flex;
`

const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
    height : 81%;
    width : 30%;
    padding : 45px 35px;
    color : white;
    font-weight : 500;
`

const Wrapper = styled(Box)`
    display : flex;
    flex-direction : column;
    padding : 25px 35px;
    flex : 1;
    & > div, & > button, & > p{
        margin-top : 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform : none;
    background : #f8641B;
    color : white;
    height : 48px;
    border-radius : 2px;
`

const RequestOTP = styled(Button)`
text-transform : none;
background : #fff;
color : #2874f0;
height : 48px;
border-radius : 2px;
box-shadow : 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const CreateAccount = styled(Typography)`
    font-size : 14px;
    text-align : center;
    color : #2874f0;
    font-weight : 600;
    cursor : pointer;
`

const accountInitialValues = {
    login : {
        view : 'login',
        heading : "Login",
        subHeading : "Get access to your Orders, Wishlist and Recommendations"
    },
    signup : {
        view : 'signup',
        heading : "Looks like you're new here!",
        subHeading : "Sign up with your mobile number to get started"
    }
}

const signupInitialValues = {
    fullname : "",
    username : "",
    email : "",
    password : "",
    phone : ""
}

function LoginDialog({open, setOpen}) {
    const [signup, setSignup] = useState(signupInitialValues);
    const [account, toggleAccount] = useState(accountInitialValues.login);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name] : e.target.value });
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        console.log(signup);
        if(response) console.log(response);
    }    

  return (
    <div>
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx : { maxWidth : 'unset'}}}>
            <Component>
                <Image>
                    <Typography variant='h5'>{account.heading}</Typography>
                    <Typography style={{ marginTop : 20 }}>{account.subHeading}</Typography>
                </Image>
                { account.view == 'login' ?
                    <Wrapper>
                        <TextField variant='standard' label='Enter Email/Mobile Number'></TextField>
                        <TextField variant='standard' label='Enter Password'></TextField>
                        <Typography style={{fontSize: 12, color: '#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <LoginButton>Login</LoginButton>
                        <Typography style={{ textAlign : 'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <CreateAccount onClick={toggleSignup}>New to Flipkart? Create an account</CreateAccount>
                    </Wrapper>
                :
                    <Wrapper>
                        <TextField variant='standard' name='fullname' onChange={(e) => onInputChange(e)} label='Enter Full Name'></TextField>
                        <TextField variant='standard' name='username' onChange={(e) => onInputChange(e)} label='Enter Username'></TextField>
                        <TextField variant='standard' name='email' onChange={(e) => onInputChange(e)} label='Enter Email'></TextField>
                        <TextField variant='standard' name='password' onChange={(e) => onInputChange(e)} label='Enter Password'></TextField>
                        <TextField variant='standard' name='phone' onChange={(e) => onInputChange(e)} label='Enter Mobile Number'></TextField>
                        <LoginButton onClick={signupUser}>Continue</LoginButton>
                    </Wrapper>
                }           
            </Component>
        </Dialog>
    </div>
  )
}

export default LoginDialog