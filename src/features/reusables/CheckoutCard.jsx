import React from 'react';
import {Grid, Button} from '@mui/material';

const CheckoutCard = (props) => {

  const handleRemoveItem = (productId) => {
    props.removeCartItem (productId);
  };

  return (
    <Grid container>
      <Grid item lg={4} xl={4} md={4} sm={3} xs={3} display={{lg: 'flex', xl: 'flex', md: 'flex', sm: '', xs: ''}} justifyContent={{lg: 'center', xl: 'center', md: 'center', sm: '', xs: ''}} alignItems={{lg: 'center', xl: 'center', md: 'center', sm: '', xs: ''}}>
        <img src={props.item.image} alt="imag" width='100px' height={{xs: '10px', lg: "200px", xl: "100px", md: "150px", sm: "150px"}} />
      </Grid>
      <Grid item lg={5} xl={5} md={6} sm={6} xs={5} ml={{xs: '30px'}}>
        <li
          key={props.item.productId}
          style={{display: 'block', alignItems: 'center'}}
        >
          <p>
            <span style={{fontSize: '16px', fontWeight: '600'}}>
              {props.item.name}
            </span>
          </p>
          <p style={{fontSize: {lg: '16px', xl: '16px', md: '13px', sm: '12px', xs: '9px'}, fontWeight: '600'}}>
            Qty <span>{props.item.quantity}</span>
          </p>
          <p style={{fontSize: {lg: '16px', xl: '16px', md: '13px', sm: '12px', xs: '10px'}, fontWeight: '600'}}>
            &#8358; <span>{props.item.salesPrice}</span>
          </p>
        </li>
      </Grid>
      <Grid item lg={2} xl={2} md={2} sm={2} xs={2}>
        <Button
          sx={{
            backgroundColor: 'green',
            color: '#fff',
            textAlignLast: 'center',
            fontWeight: '600',
            fontSize:  {lg: '12px', xl: '12px', md: '10px', sm: '10px', xs: '9px'},
            width: {
              lg: '70px',
              xl: '70px',
              md: '70px',
              sm: '65px',
              xs: '55px',
            },
            height: {
              lg: '35px',
              xl: '35px',
              md: '35px',
              sm: '30px',
              xs: '25px',
            },
            border: 'none',
            borderRadius: '4px',
            '&:hover': {
              backgroundColor: '#53a953',
            },
          }}
          onClick={() => handleRemoveItem (props.item.productId)}
        >
          Remove
        </Button>
      </Grid>
    </Grid>
  );
};

export default CheckoutCard;
