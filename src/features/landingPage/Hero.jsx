import React, { useCallback, useEffect, useState } from 'react';
import style from './styles/Hero.module.css';
import { useTheme, useMediaQuery, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import BgLarge from '../../assets/image/BgLarge.jpeg';
import BgMid from '../../assets/image/BgMd.jpeg';
import { createCartUrl, getCartBySessionIdUrl } from '../../api/Api';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(theme.breakpoints.between(960, 500));
  const isXSScreen = useMediaQuery(theme.breakpoints.down(500));
  const [index, setIndex] = useState(0)

  const Contents = [
    {
      imageUrl: BgLarge,
      alth: 'ImageOne',
    },{
      imageUrl: BgMid,
      alth: 'ImageTwo',
    }
  ]

  const createCart = useCallback(async()=>{
    const sessionId = { sessionId: localStorage.getItem('sessionId') };
    await axios.post(createCartUrl(sessionId.sessionId), sessionId)
    .then((res) => {
      localStorage.setItem("cartId", res.data.response.data._id)
      localStorage.getItem('cartId');
    })
    .catch((error) => {
      // alert(error)
    })
  }, [])

  const fetchCartBySessionIdUrl = useCallback(async()=>{
    const sessionId = localStorage.getItem('sessionId')
    const response = await axios.get(getCartBySessionIdUrl(sessionId))
    .then((res)=>{
      return res.data
    })
    .catch((error) => {
      // alert(error)
    })
    return response;
  },[])
  
  useEffect(() => {
    let sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem('sessionId', sessionId);
      createCart(sessionId)
        .then((res) => {
          if (res.message === 'Empty cart created successfully') {
            // alert('Cart created successfully');
          } else {
          }
        })
        .catch((error) => {
          // alert('Error creating cart:', error);
        });
    } 
  }, [fetchCartBySessionIdUrl, createCart]);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index + 1) % Contents.length)
    }, 10000)
    return () => clearInterval(intervalId)
  }, [index])

  return (
    <Grid
      container
      className={style.heroContain}
      sx={{
        backgroundImage: !isMobile ? `url(${Contents[index].imageUrl})` : `url(${Contents[index].imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: isSmScreen ? 'cover' : isXSScreen ? 'cover' : 'cover',
        height: isSmScreen ? '400px' : isXSScreen ? '150px' : '500px',
      }}
    >
      <Grid
        item
        lg={12}
        md={12}
        sm={12}
        xs={12}
        xl={12}
        sx={{
          backgroundColor: !isMobile ? 'rgb(189, 186, 186)' : 'white',
          height: !isMobile ? '50px' : '50px',
        }}
      >
        <Grid container display="flex" p="10px 10px" textAlign="center">
          {!isMobile && (
            <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={2}>
              <li style={{ listStyle: 'none' }}>
                <Link
                  to="/services-offered"
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: !isMobile ? '18px' : '16px',
                    fontWeight: '700',
                  }}
                >
                  Services Offered
                </Link>
              </li>
            </Grid>
          )}
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={2}>
            <li style={{ listStyle: 'none' }}>
              <Link
                to="/product"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: !isMobile ? '18px' : '16px',
                  fontWeight: '700',
                }}
              >
                Products
              </Link>
            </li>
          </Grid>
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={2}>
            <li style={{ listStyle: 'none' }}>
              <Link
                to="/spa"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: !isMobile ? '18px' : '16px',
                  fontWeight: '700',
                }}
              >
                Spa
              </Link>
            </li>
          </Grid>
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={2}>
            <li style={{ listStyle: 'none' }}>
              <Link
                to="/saloon"
                style={{
                  textDecoration: 'none',
                  color: '#000',
                  fontSize: !isMobile ? '18px' : '16px',
                  fontWeight: '700',
                }}
              >
                Saloon
              </Link>
            </li>
          </Grid>
          {!isMobile && (
            <Grid item lg={2.4} xl={2.4} sm={5} xs={5} md={4}>
              <li style={{ listStyle: 'none' }}>
                <Link
                  to="/pedicure-medicure"
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: !isMobile ? '18px' : '16px',
                    fontWeight: '700',
                  }}
                >
                  Pedicure & Medicure
                </Link>
              </li>
            </Grid>
          )}
          {isMobile && (
            <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
              <li style={{ listStyle: 'none' }}>
                <Link
                  to="/pedicure"
                  style={{
                    textDecoration: 'none',
                    color: '#000',
                    fontSize: !isMobile ? '18px' : '16px',
                    fontWeight: '700',
                  }}
                >
                  Pedicure
                </Link>
              </li>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
