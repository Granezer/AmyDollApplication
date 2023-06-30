import CartIcon from '../../assets/image/Cart.svg'
import SearchIcon from '../../assets/image/Search.svg'
import style from './styles/TopNav.module.css';
import { useState, useEffect, useCallback } from 'react';
import { useTheme, useMediaQuery, Grid, Typography } from '@mui/material';
import Logo from '../../assets/image/Logo.jpeg';
import { getAllCartItemsUrl } from '../../api/Api'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const cartItems = async (value) => {
  return value.length
}

const TopNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const hideButton = location.pathname === '/admin/dashbord'
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [searchProduct, setsearchProduct] = useState();
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(0);
  
  const handleChange = (e) => {
    setsearchProduct(e.target.value);
  };
  
  const fetchCartItems = async () => {
    try {
      const response = await axios.get(getAllCartItemsUrl);
      if (response.status === 200) {
        setItems(response.data.response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error('Failed to fetch cart items:', error);
    }
  };
  
  const handleQuantity = useCallback(() => {
    let totalQuantity = 0;
    const itemsArray = Array.from(items);
    itemsArray.forEach((item) => {
      totalQuantity += item.quantity;
    });
    setQuantity(totalQuantity)
  }, [items]);
  
  useEffect(() => {
    fetchCartItems();
  }, []);
  
  useEffect(() => {
    handleQuantity();
  }, [handleQuantity]);

  return (
    <>
      {!isMobile && (
        <Grid container sx={{ backgroundColor: '#e79595', justifyContent: 'center', alignItems: 'center', padding: '10px 0px' }}>
          <Grid item lg={3} xl={3} sx={{ fontSize: '25px', fontWeight: '700', color: 'black', textAlign: 'start', pl: '50px' }}>
            <a href='/' style={{ textDecoration: 'none', color: '#000' }}><img src={Logo} alt="Logo" style={{ width: '80px', height: '80px', borderRadius: '8px' }} /></a>
          </Grid>
          <Grid item lg={6} xl={6} sx={{ backgroundColor: 'white', borderRadius: '8px' }}>
            <Grid container>
              <Grid item lg={10} xl={10} sx={{ display: 'flex', alignItems: 'center' }}>
                <input className={style.FI} style={{ color: '#000', backgroundColor: 'white', padding: '5px 10px', border: 'none', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', fontSize: '18px', textAlignLast: 'start' }} type="text" placeholder="Search for products..." value={searchProduct} onChange={handleChange} />
              </Grid>
              <Grid item lg={2} xl={2} sx={{ color: 'white', backgroundColor: '#cd6444', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <img className={style.topSCI} src={SearchIcon} alt='SearchIcon' />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} xl={3} className={style.topTC}>
            <Grid container>
              <Grid item lg={11} xl={11} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: '#000', fontSize: '20px', fontWeight: '700' }}>Book Session</Typography>
                <button onClick={()=> navigate('/login')}>login</button>
              </Grid>
              {!hideButton &&(
                <Grid item lg={1} xl={1} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={CartIcon} alt='CartIcon' />
                {/* <span style={{ color: 'black', fontSize: '20px', fontWeight: '700', backgroundColor: 'transparent', marginTop: '-15px', borderRadius: '50%' }}>{quantity}</span> */}
              </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
      {isMobile && (
        <Grid container sx={{ backgroundColor: '#e79595', justifyContent: 'center', alignItems: 'center', padding: '10px 20px' }}>
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
            <Grid container spacing={0.5}>
              <Grid item sm={6} md={6} xs={4} sx={{ fontSize: '18px', fontWeight: '700', color: '#cd6444', textAlign: 'start' }}><a href='/' style={{ textDecoration: 'none', color: '#cd6444' }}><img src={Logo} alt="Logo" style={{ width: '60px', height: '60px', borderRadius: '8px' }} /></a></Grid>
              <Grid item sm={5} md={5} xs={6} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#cd6444' }}>
                <Typography sx={{ color: '#000 !important', fontSize: '18px', fontWeight: '900' }}>Book Session</Typography>
              </Grid>
{!hideButton &&(              <Grid item sm={1} md={1} xs={2} sx={{ textAlignLast: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src={CartIcon} alt='CartIcon' />
                {/* <span style={{ color: '#000', fontSize: '16px', fontWeight: '700', backgroundColor: 'transparent', marginTop: '-15px', borderRadius: '50%' }}>{quantity}</span> */}
              </Grid>)}
            </Grid>
          </Grid>
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12} sx={{ backgroundColor: 'white', borderRadius: '8px', padding: '0px 0px' , mt: '20px', mb: '20px' }}>
            <Grid container>
              <Grid item sm={10} xs={10} md={10}>
                <input className={style.FI} style={{ color: '#000', backgroundColor: 'transparent', padding: '5px 10px', border: 'none', borderBottomLeftRadius: '8px', borderTopLeftRadius: '8px', fontSize: '18px', textAlignLast: 'start', width: '100%' }} type="text" placeholder="Search for products..." value={searchProduct} onChange={handleChange} />
              </Grid>
              <Grid item sm={2} xs={2} md={2} sx={{ color: 'white', backgroundColor: '#cd6444', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                <img className={style.topSCI} src={SearchIcon} alt='SearchIcon' />
              </Grid>
            </Grid>
          </Grid>
          {/* <hr style={{ width: '100%', border: '0.25px solid black' }}/> */}
        </Grid>
      )}
    </>
  )
}

export default TopNav
