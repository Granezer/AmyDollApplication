import style from './styles/Subscribe.module.css'
import { useTheme, useMediaQuery, Grid, Button, Typography } from '@mui/material';
import { useState } from 'react';
import axios from 'axios'

const Subscribe = () => {
  const [data, setData] = useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  console.log(e.target.value)
    axios
      .post('http://localhost:8000/email', {
        email: data.email,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container sx={{ p: !isMobile ? '2% 0%' : '6% 4%', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mb: '40px' }}>
        <Typography style={{ fontSize: !isMobile ? '40px' : '20px', fontWeight: '700', color: !isMobile ? 'rgb(236, 124, 32)' : '#cd6444', textAlignLast: 'center' }}>Subscribe to our Newsletter</Typography>
        <Grid item lg={12} xl={12} sm={12} xs={12} md={12} sx={{ p: '10px 10px', borderRadius: '60px', backgroundColor: !isMobile ? 'rgb(245, 139, 98)' : '#cd6444 ', width: !isMobile ? '900px' : '500px' }}>
          <Grid container>
            <Grid item lg={9} xl={9} sm={9} xs={9} md={9} sx={{ display: 'flex', alignItems: 'center'  }}>
              <input className={style.SCFI} style={{ fontSize: !isMobile ? '18px' : '14px', borderRadius: '30px', fontWeight: '600', p: '15px', border: 'none', width: '100%' }} type="text" placeholder="Enter your email address" value={data} onChange={()=> handleChange()} />
            </Grid>
            <Grid item lg={3} xl={3} sm={3} xs={3} md={3}>
              <Button sx={{ color: 'black', backgroundColor:'white', fontSize: !isMobile ? '20px' : '12px', borderRadius: '30px', fontWeight: '600', p: '15px', border: 'none', width: '100%' }} className={style.SCFB} onSubmit={handleSubmit}>SUBSCRIBE</Button>
            </Grid>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default Subscribe