import {useState, useCallback, useEffect} from 'react';
import {Grid, Box, useMediaQuery, useTheme, Button} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {getAllCartItemsUrl, deleteCartItemUrl} from '../../api/Api';
import CheckoutCard from '../reusables/CheckoutCard';
import Loader from '../reusables/Loader';

const Checkout = () => {
  const navigate = useNavigate ();
  const [items, setItems] = useState ([]);
  const [totalPrice, setTotalPrice] = useState (0);
  const [deleteRes, setDeleteRes] = useState ();
  const [isLoading, setIsLoading] = useState (true);

  const fetchCartItems = useCallback (async () => {
    try {
      const sessionId = localStorage.getItem ('sessionId');
      const cartId = localStorage.getItem ('cartId');
      const response = await axios.get (getAllCartItemsUrl (sessionId, cartId));
      if (response.status === 200) {
        setItems (response.data.response.data);
        setIsLoading (false);
      } else {
        alert (response.message);
      }
    } catch (error) {
      alert ('Failed to fetch cart items:', error);
    }
  }, []);

  const handleDelete = async productId => {
    try {
      let sessionId = localStorage.getItem ('sessionId');
      let cartId = localStorage.getItem ('cartId');

      await axios.delete (deleteCartItemUrl (productId, sessionId, cartId));
      setItems (prevItems =>
        prevItems.filter (item => item.productId !== productId)
      );
    } catch (error) {
      alert ('Error removing cart item:', error);
    }
  };

  useEffect (
    () => {
      fetchCartItems ();
    },
    [fetchCartItems]
  );

  useEffect (
    () => {
      const calculateTotalPrice = () => {
        let totalPrice = 0;
        items.forEach (item => {
          totalPrice += item.salesPrice * item.quantity;
        });
        setTotalPrice (totalPrice);
      };
      calculateTotalPrice ();
    },
    [items]
  );

  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <Grid
      container
      sx={{backgroundColor: '#fff', color: '#000', p: '30px 20px'}}
    >
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <h1 style={{color: '#e79595', textAlign: 'center'}}>Checkout</h1>
      </Grid>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12}>
        <ul>
          {items.map (item => (
            <li
              key={item.productId}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}
            >
              <CheckoutCard item={item} removeCartItem={handleDelete} />
            </li>
          ))}
        </ul>
      </Grid>
      <Grid
        item
        lg={12}
        xl={12}
        md={12}
        sm={12}
        xs={12}
        sx={{fontWeight: '600', p: '20px'}}
      >
        <Grid container>
          <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
            Total Price
          </Grid>
          <Grid
            item
            lg={6}
            xl={6}
            md={6}
            sm={6}
            xs={6}
            sx={{textAlign: 'right'}}
          >
            &#8358; {totalPrice}
          </Grid>
        </Grid>
        <Grid container mb={3}>
          <Grid item lg={6} xl={6} md={6} sm={6} xs={6}>
            Shipping Fee
          </Grid>
          <Grid
            item
            lg={6}
            xl={6}
            md={6}
            sm={6}
            xs={6}
            sx={{textAlign: 'right'}}
          >
            &#8358; {0}
          </Grid>
        </Grid>
        <hr style={{border: '1px solid #000'}} />
        <Grid container mt={3}>
          <Grid
            item
            lg={6}
            xl={6}
            md={6}
            sm={6}
            xs={6}
            color={'#e79595'}
            sx={{fontWeight: '700', fontSize: '18px'}}
          >
            Total
          </Grid>
          <Grid
            item
            lg={6}
            xl={6}
            md={6}
            sm={6}
            xs={6}
            sx={{
              textAlign: 'right',
              color: '#e79595',
              fontWeight: '700',
              fontSize: '18px',
            }}
          >
            &#8358; {totalPrice}
          </Grid>
        </Grid>
      </Grid>
      <Button
        sx={{
          backgroundColor: '#cd6444',
          color: '#fff',
          textAlignLast: 'center',
          fontWeight: '600',
          width: {
            lg: '120px',
            xl: '120px',
            md: '100px',
            sm: '90px',
            xs: '80px',
          },
          height: {lg: '40px', xl: '40px', md: '40px', sm: '40px', xs: '35px'},
          borderRadius: '4px',
          justifySelf: 'center',
          margin: '0 auto',
          '&:hover': {
            backgroundColor: '#e79595',
          },
        }}
        onClick={() => {
          navigate ('/billing', {
            state: {
              amount: totalPrice,
              items: items.map (item => ({
                productId: item.productId,
                quantity: item.quantity,
              })),
            },
          });
        }}
      >
        Chekout
      </Button>
    </Grid>
  );
};

export default Checkout;
