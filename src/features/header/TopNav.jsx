import CartIcon from '../../assets/image/Cart.svg'
import SearchIcon from '../../assets/image/Search.svg'
import style from './styles/TopNav.module.css'
import { useContext } from 'react'
import { useTheme, useMediaQuery, Grid, Typography } from '@mui/material'
import Logo from '../../assets/image/Logo.jpeg'
import { useNavigate, useLocation } from 'react-router-dom';
import{ Button, Skeleton } from '@mui/material'
import { CartContext } from '../reusables/CartContext';
import { SearchContext } from '../reusables/ProductContext'

const TopNav = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const hideButton = location.pathname === '/admin/dashbord'
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const { cartItems, loading } = useContext(CartContext);
  const { searchText, setSearchText } = useContext(SearchContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const getCartItemCount = () => {
    let totalQuantity = 0;
    if (cartItems) {
      cartItems.forEach((item) => {
        totalQuantity += item.quantity;
      });
    }
    return totalQuantity;
  };


  return (
    <>
      {!isMobile && (
        <Grid
          container
          sx={{
            backgroundColor: '#e79595',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 0px',
          }}
        >
          <Grid
            item
            lg={3}
            xl={3}
            md={3}
            sx={{
              fontSize: '25px',
              fontWeight: '700',
              color: 'black',
              textAlign: 'start',
              pl: '50px',
            }}
          >
            <a href='/' style={{ textDecoration: 'none', color: '#000' }}>
              <img
                src={Logo}
                alt='Logo'
                style={{ width: '130px', height: '130px', borderRadius: '8px' }}
              />
            </a>
          </Grid>
          <Grid
            item
            lg={6}
            xl={6}
            md={6}
            sx={{ backgroundColor: 'white', borderRadius: '8px' }}
          >
            <Grid container>
              <Grid
                item
                lg={10}
                xl={10}
                md={10}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                <input
                  className={style.FI}
                  style={{
                    color: '#000',
                    backgroundColor: 'white',
                    padding: '5px 10px',
                    border: 'none',
                    borderBottomLeftRadius: '8px',
                    borderTopLeftRadius: '8px',
                    fontSize: '18px',
                    textAlignLast: 'start',
                  }}
                  type='text'
                  placeholder='Search for products...'
                  value={searchText}
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                item
                lg={2}
                xl={2}
                md={2}
                sx={{
                  color: 'white',
                  backgroundColor: '#cd6444',
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <img
                  className={style.topSCI}
                  src={SearchIcon}
                  alt='SearchIcon'
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={3} xl={3} md={3} className={style.topTC}>
            <Grid container>
              <Grid
                item
                lg={11}
                xl={11}
                md={9}
                sx={{
                  textAlignLast: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography
                  sx={{ color: '#000', fontSize: '20px', fontWeight: '700' }}
                >
                  Book Session
                </Typography>
              </Grid>
              {!hideButton && (
                <Grid
                  item
                  lg={1}
                  xl={1}
                  md={3}
                  sx={{
                    textAlignLast: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    onClick={() => {
                      navigate('/checkout')
                    }}
                  >
                    <img src={CartIcon} alt='CartIcon' />
                  </Button>
                  {loading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                  ):(
                  getCartItemCount() > 0 && (
                    <span
                      style={{
                        color: 'black',
                        fontSize: '20px',
                        fontWeight: '700',
                        backgroundColor: 'transparent',
                        marginTop: '-15px',
                        borderRadius: '50%',
                      }}
                    >
                      {getCartItemCount()}
                    </span>
                  ))}
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
      {isMobile && (
        <Grid
          container
          sx={{
            backgroundColor: '#e79595',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 20px',
          }}
        >
          <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
            <Grid container spacing={0.5}>
              <Grid
                item
                sm={6}
                md={6}
                xs={4}
                sx={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#cd6444',
                  textAlign: 'start',
                }}
              >
                <a
                  href='/'
                  style={{ textDecoration: 'none', color: '#cd6444' }}
                >
                  <img
                    src={Logo}
                    alt='Logo'
                    style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '8px',
                    }}
                  />
                </a>
              </Grid>
              <Grid
                item
                sm={5}
                md={5}
                xs={6}
                sx={{
                  textAlignLast: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#cd6444',
                }}
              >
                <Typography
                  sx={{
                    color: '#000 !important',
                    fontSize: '14px',
                    fontWeight: '900',
                  }}
                >
                  Book Session
                </Typography>
              </Grid>
                {/* {loading ? ( */}
                  {/* <Grid
                  item
                  sm={1}
                  md={1}
                  xs={2}
                  sx={{
                    textAlignLast: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    onClick={() => {
                      navigate('/checkout')
                    }}
                  >
                    <img src={CartIcon} alt='CartIcon' />
                  </Button>
                  <span
                    style={{
                      color: '#000',
                      fontSize: '16px',
                      fontWeight: '700',
                      backgroundColor: 'transparent',
                      marginTop: '-15px',
                      borderRadius: '50%',
                    }}
                  >
                    {quantity === 0}
                  </span>
                </Grid>
                ):( */}
                  <Grid
                  item
                  sm={1}
                  md={1}
                  xs={2}
                  sx={{
                    textAlignLast: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    style={{ backgroundColor: 'transparent', border: 'none' }}
                    onClick={() => {
                      navigate('/checkout')
                    }}
                  >
                    <img src={CartIcon} alt='CartIcon' />
                  </Button>
                  {loading ? (
                    <Skeleton variant="circular" width={40} height={40} />
                  ):(
                  getCartItemCount() > 0 && (
                    <span
                      style={{
                        color: 'black',
                        fontSize: '20px',
                        fontWeight: '700',
                        backgroundColor: 'transparent',
                        marginTop: '-15px',
                        borderRadius: '50%',
                      }}
                    >
                      {getCartItemCount()}
                    </span>
                  ))}
                </Grid>
                {/* )} */}
            </Grid>
          </Grid>
          <Grid
            item
            lg={12}
            xl={12}
            xs={12}
            sm={12}
            md={12}
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '0px 0px',
              mt: '20px',
              mb: '20px',
            }}
          >
            <Grid container>
              <Grid item sm={10} xs={10} md={10}>
                <input
                  className={style.FI}
                  style={{
                    color: '#000',
                    backgroundColor: 'transparent',
                    padding: '5px 10px',
                    border: 'none',
                    borderBottomLeftRadius: '8px',
                    borderTopLeftRadius: '8px',
                    fontSize: '18px',
                    textAlignLast: 'start',
                    width: '100%',
                  }}
                  type='text'
                  placeholder='Search for products...'
                  value={searchText}
                  onChange={handleChange}
                />
              </Grid>
              <Grid
                item
                sm={2}
                xs={2}
                md={2}
                sx={{
                  color: 'white',
                  backgroundColor: '#cd6444',
                  borderTopRightRadius: '8px',
                  borderBottomRightRadius: '8px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: 'flex',
                }}
              >
                <img
                  className={style.topSCI}
                  src={SearchIcon}
                  alt='SearchIcon'
                />
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
