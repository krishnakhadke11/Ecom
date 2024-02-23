import React from 'react';
import { useState } from 'react';
import {AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, styled} from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButton from './CustomButton';
import logoURL from '../../images/logo.png'

import { Link } from 'react-router-dom';

const BoxComponent = styled(Link)`
    margin-left : 12%;
    line-height : 0;
    text-decoration: none;
    color: inherit;
`

const SubHeading = styled(Typography)` 
    font-size : 10px;
    font-style : italic;
`

const PlusImage = styled('img')({
    width : 10,
    height : 10, 
    marginLeft : 4
})

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin : '0 5% 0 5%',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));
   
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}))

function Header() {
    // const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setopen] = useState(false);

    const handleOpen = () => {
        setopen(true);
    }

    const handleClose = () => {
        setopen(false);
    }

    const list = () =>(
        <Box style = {{ width: 200 }} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButton/>
                </ListItem>
            </List>
        </Box>
    )
  return (
    <div>
        <AppBar style={{background:"#f85721", height:55}}>
            <Toolbar style={{minHeight:55}}>
            <MenuButton color= "inherit" onClick={handleOpen}>
            <Menu/>
            </MenuButton>

            <Drawer open = {open} onClose = {handleClose}>
               {list()}</Drawer> 
                <BoxComponent to = '/'>
                    <img src={logoURL} alt='logo' style={{ width:150 }}/>
                </BoxComponent>
                <Search/>
                <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header