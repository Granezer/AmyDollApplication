import React, {useState} from 'react';
import './styles/Register.css';
import {registerUrl} from '../../../api/Api';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'


function Register () {
    const navigate = useNavigate();
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    phoneNumber: '',
    gender: '',
  };
  const [value, setValue] = useState (initialValue);

  const handleChange = e => {
    setValue (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const response = await axios.post (registerUrl, value);
      if(response.status === 200){
        if (response.data.token) {
          navigate('/dashboard');
          // console.log('successful --> ', response);
      }
      }else{
        console.log('Failed to login')
      }
    } catch (error) {
      console.error ('Register failed:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName" className="label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={value.firstName}
          onChange={handleChange}
          className="input"
          required
        />

        <label htmlFor="lastName" className="label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={value.lastName}
          onChange={handleChange}
          className="input"
          required
        />

        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={value.email}
          onChange={handleChange}
          className="input"
          required
        />

        <label htmlFor="userName" className="label">
          user Name:
        </label>
        <input
          type="text"
          id="userName"
          name="userName"
          value={value.userName}
          onChange={handleChange}
          className="input"
          required
        />

        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={value.password}
          onChange={handleChange}
          className="input"
          required
        />

        <label htmlFor="phoneNumber" className="label">
          Phone Number:
        </label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={value.phoneNumber}
          onChange={handleChange}
          className="input"
          required
        />
        <label htmlFor="gender" className="label">
          Gender:
        </label>
        <select
          id="gender"
          name="gender"
          value={value.gender}
          onChange={handleChange}
          className="input"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <input type="submit" value="Register" className="submit-button" />

        <p className="login-link">
  Already have an account? <Link to="/login">Login</Link>
</p>
      </form>
    </div>
  );
}

export default Register;
