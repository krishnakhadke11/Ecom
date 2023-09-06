import { Grid } from '@mui/material'
import React from 'react'
import { imageURL } from '../../constants/data'
import styled from '@emotion/styled'; 

const Wrapper = styled(Grid)`
    margin-top : 10px;
    justify-center : space-between;
`   

const Image = styled('img')(({ theme }) => ({ 
    display: 'flex',
    marginTop: 20,
    justifyContent: 'space-between',
    width: '100%',
    // [theme.breakpoints?.down('md')]: {
    //     objectFit: 'cover',
    //     height: 120
    // }
    '@media (max-width: 992px)': {
        objectFit: 'cover',
        height: 120
      },
    
}));



function MidSection() {

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    var ind = 0;
  return (
    <>
        <Wrapper container columns={12} >
            {
                imageURL.map(image => (
                    <Grid key={ind++} item lg={4} sm={4} md={12} xs={12} >
                        <img src={image} alt='image' style={{ width:'100%' }} />
                    </Grid>
                ))
            }
        </Wrapper>
        <Image src={url} alt='covid' />
    </>
  )
}

export default MidSection