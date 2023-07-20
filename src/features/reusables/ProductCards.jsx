/* eslint-disable react/prop-types */
import {
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Typography,
  Box,
} from '@mui/material';
import PropTypes from 'prop-types';
import {addToCartUrl, getAllCartItemsUrl} from '../../api/Api';
import axios from 'axios';
import { useContext  } from 'react';
import {useLocation} from 'react-router-dom';
import { CartContext } from './CartContext';

const ProductCards = props => {
  const { setCartItems } = useContext(CartContext);
  const sessionId = localStorage.getItem('sessionId');
  const location = useLocation ();
  const hideButton = location.pathname === '/admin/dashbord';
  const theme = useTheme ();
  const isMobile = useMediaQuery (theme.breakpoints.down ('md'));

  const sendItemToCart = async () => {
    if (!props.productId) {
      // console.error ('Product ID is missing.');
      return;
    }
    const cartId = localStorage.getItem('cartId')
    const dataValue = {
      productId: props.productId,
      sessionId: sessionId,
      cartId: cartId,
    }

    try {
      const sessionId = localStorage.getItem('sessionId');
      const cartId = localStorage.getItem("cartId");
      await axios.post (addToCartUrl, dataValue);
      const cartItemsResponse = await axios.get(getAllCartItemsUrl(sessionId, cartId));

      if (cartItemsResponse.status === 200) {
        setCartItems(cartItemsResponse.data.response.data); 
      } else {
        // alert (cartItemsResponse.message);
      }
    } catch (error) {
      // alert ('Failed to add item to cart:', error);
    }
  };

  const handleAddToCart = async () => {
    await sendItemToCart();
  };

  // const handleBuyNow = () => {
  //   navigate ('/single-product', {
  //     state: {
  //       image_: props.image,
  //       name: props.name,
  //       price: props.price,
  //       salesPrice: props.salesPrice,
  //       description: props.description,
  //     },
  //   });
  // };

  return (
    <Grid
      container
      sx={{
        boxShadow: '0 0 5px rgba(161, 151, 151, 0.3), 0 5px 5px rgba(161, 151, 151, 0.3), 5px 0 5px rgba(161, 151, 151, 0.3), 5px 5px 5px rgba(161, 151, 151, 0.3)',
        minHeight: {
          lg: '220px',
          md: '250px',
          sm: '300px',
          xs: '300px',
          xl: '300px',
        },
        minWidth: {
          lg: '220px',
          md: '300px',
          sm: '250px',
          xs: '300px',
          xl: '300px',
        },
        m: hideButton ? '2px' : '',
      }}
    >
      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          minHeight: '200px',
          position: 'relative',
        }}
      >
        <img
          src={props.image}
          alt="ProductImage"
          style={{
            width: '100%',
            height: '300px',
            objectFit: 'contain',
            paddingTop: '10px'
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            top: '0',
            paddingTop: '10px',
            paddingRight: '10px',
          }}
        >
          <button
            style={{
              backgroundColor: '#376fad',
              fontSize: '14px',
              fontWeight: '600',
              width: '60px',
              height: '30px',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
            }}
          >
            Sale!
          </button>
        </Box>
      </Grid>

      <Grid
        item
        lg={12}
        md={12}
        xs={12}
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: hideButton ? 'center' : 'space-between',
          textAlign: hideButton ? 'center' : '',
          alignItems: hideButton ? 'center' : '',
        }}
      >
        <Typography
          mb={isMobile ? 1 : 2}
          sx={{
            color: '#000',
            fontWeight: '600',
            fontSize: isMobile ? '14px' : '14px',
          }}
        >
          {props.name.length > 25 ? props.name.slice (0, 25) + '...' : props.name}
        </Typography>
        <Box sx={{display: 'flex'}}>
          <Typography
            mb={isMobile ? 1 : 2}
            sx={{
              color: '#cdcdcd',
              fontWeight: '400',
              fontSize: isMobile ? '15px' : '15px',
              textDecoration: 'line-through',
              pr: '5px',
            }}
          >
            Price &#8358; {props.price}
          </Typography>
          <Typography
            mb={isMobile ? 1 : 2}
            sx={{
              color: '#000',
              fontWeight: '700',
              fontSize: isMobile ? '15px' : '15px',
            }}
          >
            Sales Price &#8358; {props.salesPrice}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', p: '10px', justifyContent: 'space-between' }}>
        {!hideButton && (<Button
          sx={{
            backgroundColor: 'transparent !important',
            color: '#a4a4a4',
            fontWeight: '550',
            fontSize: '14px',
            padding: '10px 2px',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>)}
          </Box>
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
