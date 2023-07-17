import React, {useState} from 'react';
import './styles/Login.css';
import {loginUrl} from '../../../api/Api';
import axios from 'axios';
import {useNavigate, Link} from 'react-router-dom';
import {Button} from '@mui/material';

function Login () {
  const navigate = useNavigate ();
  const [value, setValue] = useState ({
    userName: '',
    password: '',
  });

  const handleChange = e => {
    setValue (prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const response = await axios.post (loginUrl, value);
      if (response.status === 200) {
        const token = response.data.data;
        if (token) {
          navigate('/dashboard');
        } else {
          alert('Invalid Admin Credentials');
        }
      } else {
        alert('Failed to login');
      }
    } catch (error) {
      // alert('Login failed:', error);
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

        <Button type="submit" className="submit-button">submit</Button>
      </form>
    </div>
  );
}

export default Login;
