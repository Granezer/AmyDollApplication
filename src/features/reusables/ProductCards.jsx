import { useTheme, useMediaQuery, Grid, Button, Typography } from '@mui/material';

const ProductCards = (props) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Grid container sx={{ boxShadow: '5px 2px 5px 2px #a19797' }}                                                   >
        <Grid item lg={5.5} md={5.5} xs={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ width: isMobile ? '150px' : '170px' }} src={props.image} alt="Product" />
        </Grid>
        <Grid item lg={6.5} md={6.5} xs={6} p={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Typography mb={2} sx={{ color: 'brown', fontWeight: '700', fontSize: isMobile ? '16px' : '16px' }}>{props.name}</Typography>
          <Typography mb={2} sx={{ color: 'white', fontWeight: '700', fontSize: isMobile ? '18px' : '25px' }}>&#8358; {props.price}</Typography>
          <Button sx={{ backgroundColor: '#e79595 !important', color: 'white', fontWeight: '550', fontSize: '12px', mb: '10px' }}>Add to Cart</Button>
          <Button sx={{ backgroundColor: 'green !important', color: 'white', fontWeight: '550', fontSize: '12px', padding: '10px 22px' }}>Buy Now</Button>
        </Grid>
      </Grid>
    )
  }
  
  export default ProductCards;