import {useTheme, useMediaQuery, Grid, Button} from '@mui/material';
import {createSessionUrl} from '../../api/Api';
import {useState} from 'react';
import axios from 'axios';

const BookSession = () => {
  const theme = useTheme ();
  const isMobile = useMediaQuery (theme.breakpoints.down ('md'));
  let initialValue = {
    clientName: '',
    phoneNumber: '',
    date: '',
    time: '',
    category: '',
  };
  const [data, setData] = useState (initialValue);

  const handleChange = (e) => {
    setData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault ();
    axios
      .post (createSessionUrl, data)
      .then (response => {
        console.log (response); 
      })
      .catch (error => {
        console.error (error);
      });
  };

  return (
    <Grid container>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        xl={12}
        md={12}
        sx={{
          alignSelf: 'center',
          textAlign: 'center',
          p: '10px 0',
          fontWeight: '700',
          color: !isMobile ? 'black' : 'white',
          backgroundColor: !isMobile ? '#e79595' : '#cd6444 !important',
          fontSize: !isMobile ? '40px' : isMobile ? '30px' : '35px',
        }}
      >
        Book Session
      </Grid>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        xl={12}
        md={12}
        pt={5}
        pl={!isMobile ? 20 : 5}
        pr={!isMobile ? 20 : 5}
      >
        <form
          style={{
            backgroundColor: 'rgb(161, 159, 159)',
            borderRadius: '16px',
            padding: !isMobile ? '40px 50px' : '20px 30px',
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={5}>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <input
                style={{
                  height: '40px',
                  width: '90%',
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                type="text"
                name="clientName"
                id="clientName"
                placeholder="Client Name"
                value={data.clientName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <input
                style={{
                  height: '40px',
                  width: '90%',
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Phone Number"
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <input
                style={{
                  height: '40px',
                  width: '90%',
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                value={data.date}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <input
                style={{
                  height: '40px',
                  width: '90%',
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                type="time"
                name="time"
                id="time"
                placeholder="Time"
                value={data.time}
                onChange={handleChange}
              />
            </Grid>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <select
                style={{
                  height: '50px',
                  width: !isMobile ? '95%' : '100%',
                  color: 'black',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                name="category"
                id="category"
                value={data.category}
                onChange={handleChange}
              >
                <option value="category">Category</option>
                <option value="product">Product</option>
                <option value="spa">Spa</option>
                <option value="saloon">Saloon</option>
                <option value="pedicure">pedicure & Medicure</option>
              </select>
            </Grid>
            <Grid item lg={6} sm={12} xs={12} xl={6} md={12}>
              <Button
                style={{
                  height: '50px',
                  width: !isMobile ? '90%' : '100%',
                  color: 'black',
                  backgroundColor: !isMobile ? 'rgb(228, 132, 76)' : '#cd6444',
                  borderRadius: '8px',
                  border: 'none',
                  padding: '5px 15px',
                  fontSize: !isMobile ? '16px' : '12px',
                  fontWeight: '550',
                }}
                type="submit"
                name="submit"
                id="submit"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default BookSession;
// https://amydoll.onrender.com/
