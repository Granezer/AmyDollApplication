import React, { useCallback } from 'react';
import { updateOrdersUrl, deleteOrderByOrderId } from '../../api/Api';
import axios from 'axios';
import { Button } from '@mui/material';

function OrderCard(props) {
  const handleStatusUpdate = useCallback(async () => {
    const data = {
      status: 'completed',
    };
    try {
      await axios.put(updateOrdersUrl(props.order._id), data);
    } catch (error) {
      // alert(error);
    }
  }, [props.order._id]);

  const handleDeleteOrder = useCallback(async () => {
    try {
      await axios.delete(deleteOrderByOrderId(props.order._id));
    } catch (error) {
      // alert(error);
    }
  }, [props.order._id]);

  return (
    <div style={mainCardContainer}>
      {props.order.items.map((item, index) => (
        <div style={CSStyle} key={index}>
          <p style={orderInfo}>Product Name: {item.name}</p>
          <img src={item.image} alt="ProductImage" style={productImage} />
        </div>
      ))}
      <div style={CSStyle}>
        <p style={orderTitle}>Customer Shipping Address</p>
        <p style={orderInfo}>Customer Name: {props.order.customerName}</p>
        <p style={orderInfo}>Email: {props.order.email}</p>
        <p style={orderInfo}>
          Total Amount: &#8358; {props.order.totalAmount}
        </p>
        <p style={orderInfo}>Country: {props.order.country}</p>
        <p style={orderInfo}>Street Address: {props.order.streetAddress}</p>
        <p style={orderInfo}>Town: {props.order.town}</p>
        <p style={orderInfo}>State: {props.order.state}</p>
        <p style={orderInfo}>Phone Number: {props.order.phoneNumber}</p>
        <p style={orderInfo}>Order Note: {props.order.orderNote}</p>
      </div>
      <div>
        <p
          style={{
            width: '50%',
            padding: '0.5em',
            margin: '1em auto',
            outline: 'none',
            backgroundColor:
              props.order.status === 'pending' ? '#063970' : '#cd6444',
            border: 'none',
            borderRadius: '0.5em',
            color: props.order.status === 'pending' ? '' : '',
            fontSize: '0.9em',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.5s ease-in-out',
          }}
        >
          Status: {props.order.status}
        </p>
        <Button
          sx={{
            width: '100%',
            padding: '0.7em',
            margin: '1em auto',
            outline: 'none',
            backgroundColor:
              props.order.status === 'pending' ? '#063970' : '#cd6444',
            border: 'none',
            borderRadius: '0.5em',
            color: 'white',
            fontSize: '1em',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.5s ease-in-out',
          }}
          disabled={props.order.status === 'pending' ? false : true}
          onClick={handleStatusUpdate}
        >
          {props.order.status === 'pending' ? 'Pending' : 'Completed'}
        </Button>
        <Button
          sx={{
            width: '100%',
            padding: '0.7em',
            margin: '1em auto',
            outline: 'none',
            backgroundColor: '#063970',
            border: 'none',
            borderRadius: '0.5em',
            color: 'white',
            fontSize: '1em',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'background-color 0.5s ease-in-out',
          }}
          onClick={handleDeleteOrder}
        >
          delete
        </Button>
      </div>
    </div>
  );
}

export default OrderCard;

export const mainCardContainer = {
}

export const CSStyle = {
    padding: '20px'
}
export const submitbtn = {
  width: '100%',
  padding: '0.7em',
  margin: '1em auto',
  outline: 'none',
  backgroundColor: '#063970',
  border: 'none',
  borderRadius: '0.5em',
  color: 'white',
  fontSize: '1em',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.5s ease-in-out',
};
export const orderItem = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
};

export const orderInfo = {
  marginBottom: '5px',
  color: '#000',
  fontSize: '16px',
  fontWeight: '600',
};

export const orderTitle = {
  marginBottom: '5px',
  color: '#000',
  fontSize: '22px',
  fontWeight: '700',
};

export const h2 = {
  fontSize: '24px',
  marginBottom: '20px',
};

export const productImage = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
};
