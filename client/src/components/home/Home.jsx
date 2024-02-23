import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//components
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

import { getProducts } from '../../redux/actions/productActions'

import { Box, styled } from '@mui/material';
const Component = styled(Box)`
  padding: 10px;
  background: #F2F2F2
`
const Home = () => {

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <Fragment>
      <NavBar/>
      <Component>
        <Banner/>
        <MidSlide products={products} title="Deal of the Day" timer={true}/>
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false}/>
        <Slide products={products} title="Suggesting Items" timer={false}/>
        <Slide products={products} title="Top Selection" timer={false}/>
        <Slide products={products} title="Recommended Items" timer={false}/>
      </Component>     
    </Fragment>
  )
}

export default Home
