import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material';
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'
import banner3 from '../../images/banner3.png'
import banner4 from '../../images/banner4.png'

const Image = styled('img')(({theme}) => ({
  width : '100%', 
  height : 280,
  // [theme.breakpoints.down('md')] : {
  //     objectFit : 'cover',
      // height : 180
  // }
  '@media (max-width: 992px)': {
      objectFit : 'cover',
      height : 180
    },
}))

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () => {
  const bannerData = [banner4, banner1, banner3, banner4, banner2]
  return (
    <Carousel 
    swipeable={false}
    draggable={false}
    responsive={responsive} 
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}  
    slidesToSlide={1}
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px" 
    containerClass="carousel-container"
    > 
    {
        bannerData.map(data =>(
            <Image  src={data} alt="banner" />

        ))
}
</Carousel>
  )
}

export default Banner
