import React from 'react';
import { useSelector } from 'react-redux';
import style from './styles/Hero.module.css';
import { useTheme, useMediaQuery, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import BgLarge from '../../assets/image/BgLarge.jpeg';
import BgMid from '../../assets/image/BgMd.jpeg';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmScreen = useMediaQuery(theme.breakpoints.between(960, 500));
  const isXSScreen = useMediaQuery(theme.breakpoints.down(500));

  return (
    <Grid
      container
      className={style.heroContain}
      sx={{
        backgroundImage: !isMobile ? `url(${BgLarge})` : `url(${BgMid})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: isSmScreen ? 'cover' : isXSScreen ? 'initial' : 'cover',
        height: isSmScreen ? '300px' : isXSScreen ? '150px' : '500px',
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
        <Grid Container display="flex" p="10px 10px" textAlign="center">
          {!isMobile && (
            <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
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
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
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
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
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
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
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
            <Grid item lg={2.4} xl={2.4} sm={5} xs={5} md={5}>
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
