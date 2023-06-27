import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import './styles/Payment.css';
import { useLocation } from 'react-router-dom';
import { initiatePaymentUrl, getPaymentVerificationUrl } from '../../api/Api'

const Payment = () => {
    const [email, setEmail] = useState('');
    // const [reference, setReference] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState()
    const location = useLocation();
    const { amount } = location.state;

    const handlePayment = useCallback(async () => {
      try {
        const response = await axios.post(initiatePaymentUrl, { email, amount });
        setData(response.data.response);
        const { authorization_url, reference } = response.data.response;
    
        const newWindow = window.open(authorization_url, '_blank');
    
        const intervalId = setInterval(async () => {
          if (newWindow.closed) {
            clearInterval(intervalId);
            await handlePaymentVerify(reference);
          }
        }, 1000);
      } catch (error) {
        console.error('Failed to initialize payment:', error);
      }
    }, [email, amount]);

    useEffect(() => {
      handlePayment();
    }, [handlePayment]);

    useEffect(() => {
      console.log('Payment initialized:', data);
    }, [data]);

    const handlePaymentVerify = async (reference) => {
      try {
        const url = getPaymentVerificationUrl(reference)
        const response = await axios.get(url);
        if(response.status === 200){
          console.log('Payment verification successful !!!');
        }else{
          console.log('Payment failed')
        }
      } catch (error) {
        console.log('An error occurred while verifying payment:', error);
      }
    };

    // const isFormValid = amount.trim() !== '' && email.trim() !== '';

    return (
      <div className="container">
        <h1 className="title">Paystack Payment</h1>
        <div className="form-group">
          <label className="label">First Name:</label>
          <input
            type="text"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Last Name:</label>
          <input
            type="text"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="label">Email:</label>
          <input
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button
          className="btn"
          onClick={handlePayment}
        >
          Initialize Payment
        </button>
        {/* {reference && (
          <div className="payment-result">
            <h2 className="subtitle">Payment Reference: {reference}</h2>
            <button className="btn" onClick={handlePaymentVerify}>
              Verify Payment
            </button>
          </div>
        )} */}
      </div> 
  )
}

export default Payment
