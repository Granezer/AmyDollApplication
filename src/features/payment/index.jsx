import { useState } from 'react';
import axios from 'axios';
import './styles/Payment.css';

const Payment = () => {
    const [amount, setAmount] = useState('');
    const [email, setEmail] = useState('');
    const [reference, setReference] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handlePaymentInitialize = async () => {
      try {
        const initializePaymentUrl = ''
        const response = await axios.post(initializePaymentUrl, {
          amount,
          email,
          firstName,
          lastName,
        });
        const { authorization_url, reference } = response.data;
        setReference(reference);

        window.location.href = authorization_url;
      } catch (error) {
        console.log('An error occurred while initializing payment:', error);
      }
    };

    const handlePaymentVerify = async () => {
      try {
        const verifyPaymentUrl = ""
        const response = await axios.get(
          `${verifyPaymentUrl}/${reference}`
        );
        console.log('Payment verification response:', response.data);
      } catch (error) {
        console.log('An error occurred while verifying payment:', error);
      }
    };

    const isFormValid = amount.trim() !== '' && email.trim() !== '';

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
          <label className="label">Amount:</label>
          <input
            type="text"
            className="input"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
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
        <button
          className="btn"
          onClick={handlePaymentInitialize}
          disabled={!isFormValid}
        >
          Initialize Payment
        </button>
        {reference && (
          <div className="payment-result">
            <h2 className="subtitle">Payment Reference: {reference}</h2>
            <button className="btn" onClick={handlePaymentVerify}>
              Verify Payment
            </button>
          </div>
        )}
      </div> 
  )
}

export default Payment
