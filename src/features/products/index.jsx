import Content from '../reusables/Content';
import ProductCards from '../reusables/ProductCards';
import { useTheme, useMediaQuery, Grid, Typography } from '@mui/material';

const Product = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Grid container sx={{ boxShadow: '5px 2px 5px 2px #a19797', backgroundColor: 'white', m: !isMobile ? '30px' : '20px', p: !isMobile ? '30px' : '10px', textAlign: 'center' }}>
            <Typography sx={{ color: '#cd6444 !important', fontSize: !isMobile ? '22px' : '18px', fontWeight: '700', p: !isMobile ? '0px 0px 20px 0px' : '0px 0px 20px 0px' }}>See All Product</Typography>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12}>
            <Grid container spacing={!isMobile ? 3 : isMobile ? 1 : 0}>
                    {Content.map((value, index) => (
                        <Grid item lg={3} sm={4} xs={12} xl={3} md={4} key={index}>
                            <ProductCards image={value.Image} name={value.name} price={value.price} />
                        </Grid>
                    ))}
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Product;