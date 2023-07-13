import {
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Box,
  Typography,
} from '@mui/material'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Star from '../../assets/image/Star.svg'

const SingleProductCard = () => {
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const location = useLocation()
  const { image_, description, price, salesPrice, name } = location.state

  const handleQuantityIncrement = () => {
    setQuantity((prevState) => prevState + 1)
  }

  const handleQuantityDecrement = () => {
    if (quantity === 0) {
      setQuantity(1)
    } else {
      setQuantity((prevState) => prevState - 1)
    }
  }

  const handleBuyNow = () => {
    navigate('/billing', { state: { amount: salesPrice * quantity } })
  }

  return (
    <Box
      sx={{
        backgroundColor: !isMobile ? '#ebe5e5 !important' : '',
        p: isMobile ? '10px 5px' : '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}
    >
      <Grid
        container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#fff',
          width: isMobile ? '97%' : '95%',
        }}
        columnSpacing={isMobile ? 5 : 2}
      >
        <Grid
          item
          lg={6}
          xl={6}
          sm={6}
          xs={12}
          md={6}
          sx={{
            p: isMobile ? '0px 5px' : '10px 20px',
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'center',
            alignItems: isMobile ? 'center' : 'center',
            flexDirection: 'row',
          }}
        >
          <img
            src={image_}
            alt='image_'
            style={{ width: '100%', objectFit: 'contain' }}
          />
        </Grid>
        <Grid
          item
          lg={6}
          xl={6}
          sm={6}
          xs={12}
          md={6}
          sx={{ mb: isMobile ? 2 : 0, p: !isMobile ? '20px 0px 20px 0px' : '' }}
        >
          <Grid container rowSpacing={!isMobile ? 6 : 2} mt={isMobile ? 3 : 0}>
            <Grid item lg={12} xs={12} sm={12} md={12} xl={12}>
              <Typography
                mb={2}
                sx={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: isMobile ? '18px' : '22px',
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: isMobile ? '14px' : '20px',
                  pr: !isMobile ? '50px' : '',
                }}
              >
                {description && description.length > 200
                  ? description.slice(0, 200) + '...'
                  : description}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  width: isMobile ? '190px' : '40%',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <img src={Star} alt='Star' />
                <Typography
                  sx={{ color: 'grey', fontSize: '14px', fontWeight: '500' }}
                >
                  89 Review
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={12} xs={12} sm={12} md={12} xl={12} display={'flex'}>
              <Typography
                mb={isMobile ? 1 : 1}
                sx={{
                  color: '#cdcdcd',
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '18px',
                  mr: '10px',
                  textDecoration: 'line-through',
                }}
              >
                Price &#8358; {price}
              </Typography>
              <Typography
                mb={isMobile ? 1 : 1}
                sx={{
                  color: '#000',
                  fontWeight: '700',
                  fontSize: isMobile ? '12px' : '18px',
                }}
              >
                Sales Price &#8358; {salesPrice}
              </Typography>
            </Grid>
            <Grid item lg={12} xs={12} sm={12} md={12} xl={12}>
              <Grid container mb={4}>
                <Grid
                  item
                  lg={2}
                  xl={1.5}
                  sm={3}
                  xs={3}
                  md={5}
                  sx={{
                    color: 'grey',
                    fontWeight: '700',
                    fontSize: isMobile ? '16px' : '16px',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    textAlign: 'center',
                  }}
                >
                  Quality:
                </Grid>
                <Grid
                  item
                  lg={1.5}
                  xl={1.5}
                  sm={2}
                  xs={2}
                  md={2}
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '2px solid grey',
                  }}
                >
                  <Button onClick={handleQuantityDecrement}>-</Button>
                </Grid>
                <Grid
                  item
                  lg={1.5}
                  xl={1.5}
                  sm={2}
                  xs={2}
                  md={2}
                  sx={{
                    color: 'black',
                    fontSize: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderTopColor: 'grey',
                    borderTopWidth: '2px',
                    borderTopStyle: 'solid',
                    borderBottomColor: 'grey',
                    borderBottomWidth: '2px',
                    borderBottomStyle: 'solid',
                  }}
                >
                  {quantity}
                </Grid>
                <Grid
                  item
                  lg={1.5}
                  xl={1.5}
                  sm={2}
                  xs={2}
                  md={2}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    border: '2px solid grey',
                  }}
                >
                  <Button
                    onClick={handleQuantityIncrement}
                    sx={{
                      color: '#001',
                      fontSize: '20px',
                      fontWeight: '700',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    +
                  </Button>
                </Grid>
              </Grid>
              <Button
                sx={{
                  color: '#a4a4a4',
                  backgroundColor: 'transparent !important',
                  fontSize: !isMobile ? '16px' : '14px',
                  fontWeight: '600',
                  border: 'none',
                  borderRadius: '4px',
                  width: '80%',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
                onClick={handleBuyNow}
              >
                Buy Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SingleProductCard
