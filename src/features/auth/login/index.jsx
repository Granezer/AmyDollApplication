import React, { useState } from 'react';
import './styles/Login.css';
import { loginUrl } from '../../../api/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
  const [value, setValue] = useState({
    userName: '',
    password: '',
  });

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log('values --> ', value)
      const response = await axios.post(loginUrl, value);
      if(response.status === 200){
        navigate('/admin/dashbord')
        console.log('successful --> ', response)
      }else{
        console.log('Failed to login')
      }

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <h2 className="title">Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName" className="label">
          Username:
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

        <input type="submit" className="submit-button" />

        <p className="register-link">
          Don't have an account? <a className='register' href="/register">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;