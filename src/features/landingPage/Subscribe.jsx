import style from './styles/Subscribe.module.css';
import { useTheme, useMediaQuery, Grid, Button, Typography, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { createSubscribeUrl } from '../../api/Api';

const Subscribe = () => {
  const [email, setEmail] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(createSubscribeUrl, { email })
      .then((response) => {
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Grid
      container
      sx={{
        p: !isMobile ? '2% 0%' : '6% 4%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        mb: '40px',
      }}
    >
      <Typography
        style={{
          fontSize: !isMobile ? '40px' : '20px',
          fontWeight: '700',
          color: '#e79595',
          textAlignLast: 'center',
        }}
      >
        Subscribe to our Newsletter
      </Typography>
      <Grid
        item
        lg={12}
        xl={12}
        sm={12}
        xs={12}
        md={12}
        sx={{
          p: '10px 10px',
          borderRadius: '60px',
          backgroundColor: '#e79595',
          width: !isMobile ? '900px' : '500px',
        }}
      >
        <Grid container>
          <Grid item lg={9} xl={9} sm={9} xs={9} md={9} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              className={style.SCFI}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '30px',
                  border: 'none',
                  outline: 'none',
                  minWidth: {lg: '700px', xl: '700px', md: '500px', sm: '400px', xs: '280px'},
                  '&:hover fieldset': {
                    borderWidth: 0,
                  },
                  '& .Mui-focused fieldset': {
                    borderWidth: 0,
                    boxShadow: 'none',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                  },
                  '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: 0,
                    boxShadow: 'none',
                  },
        
                },
                '& .MuiOutlinedInput-input': {
                  fontSize: !isMobile ? '18px' : '14px',
                  border: 'none',
                  outline: 'none',
                  '&:-webkit-autofill': {
                    'webkitBoxShadow': '0 0 0px 1000px white inset',
                  },
                },
              }}
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
          </Grid>
          <Grid item lg={3} xl={3} sm={3} xs={3} md={3}>
            <Button
              sx={{
                color: 'black',
                backgroundColor: 'white !important',
                fontSize: !isMobile ? '20px' : '12px',
                borderRadius: '30px',
                fontWeight: '600',
                p: '15px',
                border: 'none',
                width: '100%',
              }}
              className={style.SCFB}
              onClick={handleSubmit}
            >
              SUBSCRIBE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Subscribe;
