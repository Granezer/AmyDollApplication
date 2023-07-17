import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import './styles/Payment.css';
import { useLocation } from 'react-router-dom';
import { initiatePaymentUrl, getPaymentVerificationUrl, createOrderUrl, deleteAllCartItemsUrl } from '../../api/Api';
import Modal from '../reusables/Modal';
import ModalVerify from '../reusables/ModalVerify';
import { Button } from '@mui/material';

const Payment = () => {
    const [data, setData] = useState()
    const location = useLocation();
    const [showModal, setShowModal] = useState(false);
    const [showVerifyModal, setShowVerifyModal] = useState(false);
    const [showUnVerifyModal, setShowUnVerifyModal] = useState(false);
    const { amount, firstName, lastName, country, streetAddress, town, state, phoneNumber, email, orderNote, items } = location.state;
    let message =''

    const createOrder = async () => {
      const sessionId = localStorage.getItem('sessionId');
      const cartId = localStorage.getItem('cartId');

      const orderData = {
        cartId: cartId,
        sessionId: sessionId,
        customerName: firstName + ' ' + lastName,
        totalAmount: amount,
        country: country,
        streetAddress: streetAddress,
        town: town,
        state: state,
        phoneNumber: phoneNumber,
        email: email,
        orderNote: orderNote,
        items: items,
      };

      try {
        const url = createOrderUrl(sessionId, cartId);
        const response = await axios.post(url, orderData);
        if(response.status === 200){
        }

      } catch (error) {
        // alert('An error occurred while creating order: ', error)
      }
    }

    const deleteAllCartItems = useCallback(async()=>{
      const sessionId = localStorage.getItem('sessionId');
      const cartId = localStorage.getItem('cartId');

      try {
        const url = deleteAllCartItemsUrl(sessionId, cartId)
        const response = await axios.delete(url);
        if(response.status === 200){}
      } catch (error) {
        
      }
    },[])

    const handlePaymentVerify = useCallback(async (reference) => {
      try {
        const url = getPaymentVerificationUrl(reference);
        const response = await axios.get(url);
        if (response.status === 200) {
          const responseData = response.data.response;
          if (responseData.message === 'Successful' && responseData.data.status === 'success') {
            createOrder();
            setShowModal(false);
            await deleteAllCartItems();
            message = 
            setShowVerifyModal(true);
          } else {
            setShowUnVerifyModal(true)
            // alert('Payment failed');
          }
        } else {
          setShowUnVerifyModal(true)
        }
      } catch (error) {
        // alert('An error occurred while verifying payment:', error);
      }
    }, []);


    const handlePayment = useCallback(async () => {
      try {
        const response = await axios.post(initiatePaymentUrl, { email, amount });
        setData(response.data.response);
        const { authorization_url, reference } = response.data.response;

        const newWindow = window.open(authorization_url, '_blank');

        if (response.status === 200) {
          setShowModal(true);
        } 
  
        const intervalId = setInterval(async () => {
          if (newWindow && newWindow.closed) {
            clearInterval(intervalId);
            await handlePaymentVerify(reference);
          }
        }, 1000);
      } catch (error) {
        // alert('Failed to initialize payment:', error);
      }
    }, [email, amount, handlePaymentVerify]);  

    useEffect(() => {
      handlePayment();
    }, [handlePayment]);

    return (
      <div className="container">
        <h1 className="title">Paystack Payment</h1>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input
            type="text"
            className="input"
            value={firstName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="label">Last Name:</label>
          <input
            type="text"
            className="input"
            value={lastName}
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            className="input"
            value={email}
            readOnly
          />
        </div>
        <div className="form-group">
          <label className="label">Amount:</label>
          <input
            type="email"
            className="input"
            value={amount}
            disabled
          />
        </div>
        <Button
          className="btn"
          onClick={handlePayment}
        >
          Initialize Payment
        </Button>
        {showModal && <Modal />}
        {showVerifyModal && <ModalVerify message={'Payment Successfully Verified'} buttonMessage={'Buy Another Product'} />}
        {showUnVerifyModal && <ModalVerify message={'Payment verification failed'} buttonMessage={'Try Again'} />}
      </div> 
  )
}

export default Payment
