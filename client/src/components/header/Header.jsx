import React from 'react';
import {AppBar, Toolbar, Box, Typography} from '@mui/material';
import styled from '@emotion/styled';
import Search from './Search';

const BoxComponent = styled(Box)`
    margin-left : 12%;
    line-height : 0;
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

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
        <AppBar style={{background:"#2874f0", height:55}}>
            <Toolbar style={{minHeight:55}}>
                <BoxComponent>
                    <img src={logoURL} alt='logo' style={{ width:75 }}/>
                    <Box style={{display : "flex"}}>
                        <SubHeading>
                            Explore&nbsp;
                            <Box component='span' style={{color : "#ffe500"}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt='subLogo'></PlusImage>
                    </Box>
                </BoxComponent>
                <Search/>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header