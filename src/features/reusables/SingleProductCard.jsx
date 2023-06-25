import { useTheme, useMediaQuery, Grid, Button, Typography } from '@mui/material';
import { useState } from 'react';
import PropTypes from 'prop-types'

const SingleProductCard = (props) => {
    const[quantity, setQuantity] = useState(0);
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const handleQuantityIncrement = () => {
        setQuantity(prevState=> prevState + 1)
    }

    const handleQuantityDecrement = () => {
        setQuantity(prevState=> prevState - 1)
    }

    return (
    <Grid container>
        <Grid item lg={8} xl={8} sm={8} xs={8} md={8} sx={{ p: !isMobile ? '10px 20px' : '10px 20px' }}>
            <img src={props.image} alt="image" />
        </Grid>
        <Grid item lg={4} xl={4} sm={4} xs={4} md={4}>
          <Typography mb={2} sx={{ color: 'brown', fontWeight: '700', fontSize: isMobile ? '16px' : '16px' }}>{props.name}</Typography>
          <Typography>{props.description}</Typography>
          <Typography>{props.price}</Typography>
          <Grid container>
            <Grid item lg={5} xl={5} sm={5} xs={5} md={5}>Quality:</Grid>
            <Grid item lg={2.3} xl={2.3} sm={2.3} xs={2.3} md={2.3}>
              <Button onClick={handleQuantityDecrement}>-</Button>
            </Grid>
            <Grid item lg={2.3} xl={2.3} sm={2.3} xs={2.3} md={2.3}>{quantity}</Grid>
            <Grid item lg={2.3} xl={2.3} sm={2.3} xs={2.3} md={2.3}>
              <Button onClick={handleQuantityIncrement}>+</Button>
            </Grid>
          </Grid>
          <Button sx={{ color: 'white', backgroundColor: '#33b27b', fontSize: !isMobile ? '16px' : '14px', fontWeight: '600', border: 'none', borderRadius: '4px' }}>Buy Now</Button>
        </Grid>
    </Grid>
  )
}

SingleProductCard.propTypes = {
  image: PropTypes.object,
  description: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
}

export default SingleProductCard