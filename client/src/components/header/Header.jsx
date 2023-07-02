import React from 'react';
import {AppBar, Toolbar, Box, Typography} from '@mui/material';
import styled from '@emotion/styled';

const BoxComponent = styled(Box)`
    margin-left : 12%;
    line-height : 0;
`

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <div>
        <AppBar style={{background:"#2874f0", height:55}}>
            <Toolbar>
                <BoxComponent>
                    <img src={logoURL} alt='logo' style={{ width:75 }}/>
                    <Box>
                        <Typography>
                            Explore Plus
                        </Typography>
                    </Box>
                </BoxComponent>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header