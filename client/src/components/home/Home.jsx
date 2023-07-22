import React, { useEffect } from 'react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//components
import NavBar from './NavBar'
import Banner from './Banner'
import Slide from './Slide'

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
      <Slide products={products}/>
      </Component>     
    </Fragment>
  )
}

export default Home
