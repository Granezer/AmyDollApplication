import React, { useCallback, useState, useEffect } from 'react';
import { getAllOrdersUrl } from '../../api/Api';
import axios from 'axios';
import OrderCard from '../reusables/OrderCard';
import Loader from '../reusables/Loader';
import { Grid } from '@mui/material';

function Orders() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    try {
      const response = await axios.get(getAllOrdersUrl);
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      // throw new Error('Failed to fetch orders: ', error);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <>
      <h2 style={h2}>Product Orders</h2>
      {loading ? (
        <Loader />
      ) : (
        <Grid container columnGap={{xl: 3, lg: 3, md: 6, sm: 5, xs: 2}} rowGap={{xl: 3, lg: 3, md: 6, sm: 5, xs: 2}} minWidth={{ lg: '700px', xl: '700px', md: '750px', sm: '750px' }} textAlign={'start'}>
        {data.length > 0 && data.map((order) => (
            <Grid item lg={5.5} xl={5.5} md={5.5} sm={5.5} xs={12} key={order._id} style={orderItem}>
              <OrderCard order={order} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}

export default Orders;

export const orderItem = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  backgroundColor: '#F8EFEA',
  boxShadow: '5px 5px 5px #D2CECB, 5px 5px 5px #D2CECB, 5px 5px 5px #D2CECB, 5px 5px 5px #D2CECB',
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
  fontSize: '20px',
  fontWeight: '600',
};

export const h2 = {
  fontSize: '24px',
  marginBottom: '20px',
};

export const productImage = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
};
