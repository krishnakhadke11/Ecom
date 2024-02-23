
import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material';
import{ LocalOffer as Badge }from '@mui/icons-material';

const Smalltext = styled(Box)`
font-size: 14px;
vertical-align: baseline;
& > p{
    font-size: 14px;
    margin-top: 10px;
}
`;

const StyledBadge = styled(Badge)`
margin-right: 10px;
color: #00CC00;
font-size: 15px;
`;

const ColumnText = styled(TableRow)`
font-size: 14px;
vertical-align: baseline;
& > td {
    font-size: 14px;
    margin-top: 10px;
    border: none;
}

`;

const ProductDetail = ({ product }) => {
    // const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    
// const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (5*24*60*60*1000));
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
          <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14}}>
            8 Ratings and 1 Reviews
            {/* <Box component = "span"> <img src={fassured} style={{ width: 77, marginLeft: 20}} alt = "img"/> </Box> */}
          </Typography>
          <Typography>
            <Box component="span" style={{ fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: '#878787'}} ><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: '#388E3C'}} >{product.price.discount} off</Box>
          </Typography>
          <Typography>Available offers</Typography>
          <Smalltext>
            <Typography><StyledBadge/>Get extra 20% off upto ₹50 on 1 item T and C </Typography>
            <Typography><StyledBadge/>10% Instant Discount on ICICI Bank Credit Card EMI Txns, up to ₹1,250 on orders of ₹5,000 and above T&C</Typography>
            <Typography><StyledBadge/>10% Instant Discount on ICICI Bank Debit Card and EMI Txns, up to ₹500 on orders of ₹5,000 and aboveT&C</Typography>
            <Typography><StyledBadge/>Get extra ₹7000 off (price inclusive of cashback/coupon)T&C</Typography>
            <Typography><StyledBadge/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
            <Typography><StyledBadge/>EMI starting from ₹528/month</Typography>
          </Smalltext>
          <Table>
            <TableBody>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                    <TableCell style={{ fontWeight: 600 }}>Delivery by {date.toDateString()} | ₹40</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                    <TableCell> No Warranty</TableCell>
                </ColumnText>
                <ColumnText>
                    <TableCell>Seller</TableCell>
                    <TableCell> 
                    <Box component = "span"  style={{ color: '#24335e' }}>SuperComNet</Box>
                    <Typography>GST invoice available</Typography>
                    <Typography>View more sellers starting from ₹{product.price.cost}</Typography>  
                        </TableCell>
                </ColumnText>
                {/* <ColumnText>
                    <TableCell colSpan={2}>
                        <img src= {adURL} style={{ width: 390 }} alt = "flipkart points" />
                    </TableCell>
                </ColumnText> */}
                <ColumnText>
                    <TableCell style={{ color: '#878787' }}>Description</TableCell>
                    <TableCell>{product.description}</TableCell>
                </ColumnText>
            </TableBody>
          </Table>
    </>
  )
}

export default ProductDetail;
