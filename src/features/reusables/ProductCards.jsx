/* eslint-disable react/prop-types */
import {useTheme, useMediaQuery, Grid, Button, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import { addToCartUrl, getAllCartItemsUrl } from '../../api/Api';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { cartItems } from '../header/TopNav'
import { useState } from 'react';

const ProductCards = props => {
  const navigate = useNavigate()
  const theme = useTheme ();
  const isMobile = useMediaQuery (theme.breakpoints.down ('md'));
  const[items, setItems] = useState([])

  const sendItemToCart = async () => {
    if (!props.productId) {
      console.error('Product ID is missing.');
      return;
    }

    try {
      const response = await axios.post(addToCartUrl, { productId: props.productId });
      console.log('Item added to cart:', response.data);
      const cartItemsResponse = await axios.get(getAllCartItemsUrl);

      if (cartItemsResponse.status === 200) {
        setItems(cartItemsResponse.data.response.data);
      } else {
        throw new Error(cartItemsResponse.message);
      }
    } catch (error) {
      console.error('Failed to add item to cart:', error);
    }
  };

  const handleAddToCart = () => {
    sendItemToCart();
    cartItems(items)
  };
  
  const handleBuyNow = () => {
    navigate('/single-product', { state: {image: props.image, name: props.name, price: props.price, description: props.description } });
  };

  return (
    <Grid container sx={{ boxShadow: '0 0 5px rgba(161, 151, 151, 0.3), 0 5px 5px rgba(161, 151, 151, 0.3), 5px 0 5px rgba(161, 151, 151, 0.3), 5px 5px 5px rgba(161, 151, 151, 0.3)', minHeight: { lg: '220px', md: '250px', sm: '300px', xs: '300px', xl: '300px', },  minWidth: { lg: '220px', md: '300px', sm: '250px', xs: '300px', xl: '300px', }}}>
      <Grid
        item
        lg={5}
        md={5}
        xs={5.5}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
      >
        <img
          style={{width: isMobile ? '150px' : '170px' }}
          src={props.image}
          alt="Product"
        />
      </Grid>
      <Grid
        item
        lg={6.5}
        md={6.5}
        xs={6}
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          mb={isMobile ? 1 : 2}
          sx={{
            color: '#a1385c',
            fontWeight: '700',
            fontSize: isMobile ? '16px' : '16px',
          }}
        >
          {props.name}
        </Typography>
        <Typography
          mb={isMobile ? 1 : 2}
          sx={{
            color: '#000',
            fontWeight: '700',
            fontSize: isMobile ? '18px' : '25px',
          }}
        >
          &#8358; {props.price}
        </Typography>
        <Button
          sx={{
            backgroundColor: '#e79595 !important',
            color: 'white',
            fontWeight: '550',
            fontSize: '12px',
            mb: '10px',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
        <Button
          sx={{
            backgroundColor: 'green !important',
            color: 'white',
            fontWeight: '550',
            fontSize: '12px',
            padding: '10px 22px',
          }}
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </Grid>
    </Grid>
  );
};

ProductCards.propTypes = {
  productId: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCards;
