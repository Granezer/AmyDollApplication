import CartIcon from '../../assets/image/Cart.svg'
import SearchIcon from '../../assets/image/Search.svg'
import style from './styles/TopNav.module.css';
import { useState } from 'react';
import { useTheme, useMediaQuery, Box, Grid, Button, Typography } from '@mui/material';
import CartMd from '../../assets/image/CartMd.svg';
import SearchMd from '../../assets/image/SearchMd.svg';

const TopNav = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [searchProduct, setsearchProduct] = useState();
  const handleChange = (e) => {
    setsearchProduct(e.target.value);
  }
  return (
    <>
      {!isMobile && (
        <Grid container sx={{ backgroundColor: 'rgb(241, 145, 88)', justifyContent: 'center', alignItems: 'center', padding: '10px 0px' }}>
          <Grid item lg={3} xl={3} sx={{ fontSize: '25px', fontWeight: '700', color: 'black', textAlign: 'center' }}>Amy Doll</Grid>
          <Grid item lg={6} xl={6} sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
            <Grid container>
              <Grid item lg={10} xl={10}>
                <input className={style.FI} style={{ color: '#000', backgroundColor: 'white', padding: '5px 10px', border: 'none', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', fontSize: '18px', textAlign: 'center' }} type="text" placeholder="Search for products..." value={searchProduct} onChange={handleChange} />
              </Grid>
              <Grid item lg={2} xl={2} sx={{ color: 'white', backgroundColor: 'rgb(255, 165, 16)', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <img className={style.topSCI} src={SearchIcon} alt='SearchIcon' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} xl={3} className={style.topTC}>
            <Grid container>
              <Grid item lg={11} xl={11} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{ color: '#000', fontSize: '20px', fontWeight: '700' }}>Book Session</Typography>
              </Grid>
              <Grid item lg={1} xl={1} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={CartIcon} alt='CartIcon' />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
      {isMobile && (
        <Grid container sx={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', padding: '10px 20px' }}>
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
            <Grid container>
              <Grid item sm={7} md={7} xs={7} sx={{ fontSize: '25px', fontWeight: '700', color: '#cd6444', textAlign: 'start' }}>Amy Doll</Grid>
              <Grid item sm={2.5} md={2.5} xs={2.5} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#cd6444' }}>
                <Typography style={{ color: '#cd6444', fontSize: '20px', fontWeight: '700' }}>Book Session</Typography>
              </Grid>
              <Grid item sm={2.5} md={2.5} xs={2.5} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={CartMd} alt='CartIcon' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} sx={{ backgroundColor: '#c2b8b86e', borderRadius: '8px', padding: '10px 0px' , mt: '20px', mb: '20px' }}>
            <Grid container>
              <Grid item sm={10} xs={10} md={10}>
                <input className={style.FI} style={{ color: '#000', backgroundColor: 'transparent', padding: '5px 10px', border: 'none', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', fontSize: '18px', textAlign: 'start', width: '100%' }} type="text" placeholder="Search for products..." value={searchProduct} onChange={handleChange} />
              </Grid>
              <Grid item sm={2} xs={2} md={2} sx={{ color: 'white', backgroundColor: 'transparent', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <img className={style.topSCI} src={SearchMd} alt='SearchIcon' />
              </Grid>
            </Grid>
          </Grid>
          <hr style={{ width: '100%', border: '0.25px solid black' }}/>
        </Grid>
      )}
    </>
  )
}

export default TopNav
