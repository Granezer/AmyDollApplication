import React, { useState } from 'react';
import './styles/Billing.css';
import { useLocation, useNavigate } from 'react-router-dom'; 
import { TextField, Button } from '@mui/material';
import { States } from '../reusables/StateArray';
import PayStackImage from '../../assets/image/paystack-wc.png'

function Billing () {
    const initialValue = {
        firstName: '',
        lastName: '',
        country: '',
        streetAddress: '',
        town: '',
        state: '',
        phoneNumber: '',
        email: '',
        orderNote: '',
        termsChecked: false,
    }
    
    const navigate = useNavigate();
    const location = useLocation()
    const { amount, items, } = location.state
    const [formData, setFormData] = useState(initialValue);
      
    // const handleChange = (e) => {
    //   const { name, value } = e.target;
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     [name]: value
    //   }));
    // };
    
    // const handleCheckboxChange = (e) => {
    //   const { checked } = e.target;
    //   setFormData((prevFormData) => ({
    //     ...prevFormData,
    //     termsChecked: checked
    //   }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/initiate-payment', { state: { amount: amount,  firstName: formData.firstName, lastName: formData.lastName, country: formData.country, streetAddress: formData.streetAddress, town: formData.town, state: formData.state, phoneNumber: formData.phoneNumber, email: formData.email, orderNote: formData.orderNote, items: items }})
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mainBodyWrapper">
        <div className="billing-details">
          <h3 className="title">Billing details</h3>

          <div className="bnames">
            <div className="bname">
              <label for="" className="label">
                First name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="nameInp"
                name="bfname"
                value={formData.firstName}
                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                id="billing-fname"
              />
            </div>

            <div className="bname">
              <label for="" className="label">
                Last name <span className="required">*</span>
              </label>
              <input
                type="text"
                className="nameInp"
                name="blname"
                id="billing-lname"
                value={formData.lastName}
                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
              />
            </div>
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              Country / Region <span className="required">*</span>
            </label>
            <select name="bcountry" id="" className="inputs" required 
                value={formData.country}
                onChange={(e) => setFormData({...formData, country: e.target.value})}>
              <option disabled>---</option>
              <option value="Nigeria">Nigeria</option>
              <option value="ghana">Ghana</option>
            </select>
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              Street address <span className="required">*</span>
            </label>
            <input
              type="text"
              name="bstr"
              placeholder="House number and street name"
              className="inputs"
              id="billing-addr"
              value={formData.streetAddress}
              onChange={(e) => setFormData({...formData, streetAddress: e.target.value})}
            />
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              Town / City <span className="required">*</span>
            </label>
            <input type="text" name="btown" className="inputs" id="billing-town" 
                value={formData.town}
                onChange={(e) => setFormData({...formData, town: e.target.value})} />
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              State <span className="required">*</span>
            </label>
            <select name="bstate" id="" className="inputs" required 
                value={formData.state}
                onChange={(e) => setFormData({...formData, state: e.target.value})}>
              <option disabled>---</option>
              {States.map ((state, index) => (
                <option key={index} value={`${state}`}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              Phone number <span className="required">*</span>
            </label>
            <input
              type="tel"
              name="bphone"
              className="inputs"
              id="billing-phone"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
            />
          </div>

          <div className="inputWrapper">
            <label for="" className="label">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="bemail"
              className="inputs"
              id="billing-email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="inputWrapper">
            <label for="" className="label">Order notes (optional)</label>
            <TextField
              name="orderNote"
              id=""
              multiline
              maxRows={2}
              className="inputs"
              value={formData.orderNote}
              onChange={(e)=> setFormData({...formData, orderNote: e.target.value})}
            />
          </div>
        </div>
        <div className="order-details">
          <div className="titleWrapper">
            <h3 className="title">Your order</h3>
            <div className="orderCat">
              <div className="cat">Product</div>
              <div className="cat">Subtotal</div>
            </div>
          </div>

          <div className="productsWrapper" id="productContainer" />

          <div className="subtotal">
            <div className="titl">SubTotal</div>
            <div className="total">
              <div className="fa-solid fa-naira-sign icon" />
              <input
                type="text"
                name="stotal"
                value={amount}
                id="subtotal"
                className="static_inp"
                readonly
              />
            </div>
          </div>

          <div className="shipping">
            <div className="titl">Shipping</div>
            <div className="total">
            </div>
          </div>

          <div className="subtotal">
            <h5 className="titl">Total</h5>
            <div className="total">
              <div className="fa-solid fa-naira-sign icon" />
              <input
                type="text"
                name="total"
                value={amount}
                className="static_inp"
                id="total"
                readonly
              />
            </div>
          </div>
          <div className="paystackWrapper">
            <img
              src={PayStackImage}
              alt="PaystackImage"
              className="paystack"
            />
          </div>
          <div style={{ margin: '30px 0px' }}></div>

          <Button type="submit" className="submitBtn">Place order</Button>
        </div>
      </div>
    </form>
  );
}

export default Billing;
