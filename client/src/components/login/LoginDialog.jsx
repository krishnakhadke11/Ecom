import styled from '@emotion/styled';
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React, { useState, useContext } from 'react'
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Cookies from 'js-cookie'

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

const Error = styled(Typography)`
    color : #ff6161;
    font-size : 10px;
    line-height : 0;
    margin-top : 10px;
    font-weight : 600;
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

const loginInitialValues = {
    username : "",
    password : ""
}

function LoginDialog({open, setOpen}) {

    const [signup, setSignup] = useState(signupInitialValues);
    const [loginaccount, toggleAccount] = useState(accountInitialValues.login);
    const [login, setLogin] = useState(loginInitialValues)
    const [error, setError] = useState(false);
    const { setAccount, setToken } = useContext(DataContext);


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name] : e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name] : e.target.value})
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        console.log(response)
        const username = login.username;
        const auth_token = response.data.authtoken
        if(response.status === 200){
            const userData = {
                username,
                auth_token
            }; 
            Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
            setAccount(username);
            setToken(auth_token)
            handleClose();
        }
        else{
            setError(true);
        }
    }

    const signupUser = async() => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        const username = login.username;
        const auth_token = response.data.authtoken
        const userData = {
            username,
            auth_token
        }; 
        // const expirationTime = new Date(new Date().getTime() + 60000);
        Cookies.set('auth_token', JSON.stringify(userData), { expires: 1 });
        setAccount(username)
        setToken(auth_token)
        handleClose();
        
    }    

  return (
    <div>
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx : { maxWidth : 'unset'}}}>
            <Component>
                <Image>
                    <Typography variant='h5'>{loginaccount.heading}</Typography>
                    <Typography style={{ marginTop : 20 }}>{loginaccount.subHeading}</Typography>
                </Image>
                { loginaccount.view === 'login' ?
                    <Wrapper>
                        <TextField variant='standard' name='username' onChange={(e) => onValueChange(e)} label='Enter Username'></TextField>
                        <TextField variant='standard' name='password' onChange={(e) => onValueChange(e)} label='Enter Password'></TextField>
                        {error && <Error>Please enter valid username and password</Error>}
                        <Typography style={{fontSize: 12, color: '#878787'}}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                        <LoginButton onClick={loginUser}>Login</LoginButton>
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