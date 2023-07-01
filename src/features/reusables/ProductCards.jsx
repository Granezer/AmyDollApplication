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
import {useNavigate} from 'react-router-dom';
import {cartItems} from '../header/TopNav';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Content from './Content';

const ProductCards = props => {
  // const sessionId = useSelector((state) => state.session.sessionId);
  // console.log('Product Session id --> ', sessionId)
  const location = useLocation ();
  const hideButton = location.pathname === '/admin/dashbord';

  const navigate = useNavigate ();
  const theme = useTheme ();
  const isMobile = useMediaQuery (theme.breakpoints.down ('md'));
  const [items, setItems] = useState ([]);

  const sendItemToCart = async () => {
    if (!props.productId) {
      console.error ('Product ID is missing.');
      return;
    }

    try {
      const response = await axios.post (addToCartUrl, {
        productId: props.productId,
      });
      console.log ('Item added to cart:', response.data);
      const cartItemsResponse = await axios.get (getAllCartItemsUrl);

      if (cartItemsResponse.status === 200) {
        setItems (cartItemsResponse.data.response.data);
      } else {
        throw new Error (cartItemsResponse.message);
      }
    } catch (error) {
      console.error ('Failed to add item to cart:', error);
    }
  };

  const handleAddToCart = () => {
    sendItemToCart ();
    cartItems (items);
  };

  const handleBuyNow = () => {
    navigate ('/single-product', {
      state: {
        image_: props.image,
        name: props.name,
        price: props.price,
        salesPrice: props.salesPrice,
        description: props.description,
      },
    });
  };

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
          alt="Product Image"
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
        {/* {!hideButton && (<Button
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
        </Button>)} */}
        {!hideButton &&
          <Button
            sx={{
              backgroundColor: 'transparent !important',
              color: '#a4a4a4',
              fontWeight: '550',
              fontSize: '14px',
              padding: '10px 2px',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
            onClick={handleBuyNow}
          >
            Buy Now
          </Button>}
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
