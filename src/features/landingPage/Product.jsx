import ProductCards from "../reusables/ProductCards";
import style from './styles/Product.module.css';
import Content from "../reusables/Content";
import { useTheme, useMediaQuery, Grid, Button, Typography } from '@mui/material';
import ThreeGirl from '../../assets/image/ThreeGirl.png'

const Product = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <Grid container p={!isMobile ? 5 : 2} rowGap={!isMobile ? 5 : isMobile ? 4 : 5}>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12} sx={{ textAlign: 'center', p: '10px 0', fontWeight: '700', color: !isMobile ? 'black' : 'white', backgroundColor: !isMobile ? '#e79595' : '#cd6444 !important', fontSize: !isMobile ? '40px' : isMobile ? '30px' : '35px' }}>Available Products</Grid>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12}>
                <Grid container spacing={!isMobile ? 10 : isMobile ? 1 : 0}>
                    {Array.from({ length: isMobile ? 3 : !isMobile ? 4 : 4 }).map((_, index) => (
                        <Grid item lg={3} sm={4} xs={12} xl={3} md={4} key={index}>
                            <ProductCards image={Content[index].Image} name={Content[index].name} price={Content[index].price} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12} className={style.PdtT}>
                <Grid container backgroundColor='white' boxShadow='5px 2px 5px 2px #a19797'>
                    <Grid item lg={8} sm={7} xs={7} xl={8} md={7} backgroundColor={'rgb(229, 175, 135)'} sx={{ display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                        <img src={ThreeGirl} style={{ width: isMobile ? '80%' : '' }} alt="" />
                    </Grid>
                    <Grid item lg={4} sm={5} xs={5} xl={4} md={5} sx={{ pl: '5px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} p={isMobile ? '10px' : ''}>
                        <Typography sx={{ p: '0px 2px' , mb: '10px', fontSize: !isMobile ? '30px' : '14px', color: !isMobile ? 'rgb(228, 132, 76) !important' : '#cd6444 !important', fontWeight: '700' }}>
                            To see more Products for different skin tones
                        </Typography>
                        <Button sx={{ borderRadius: '16px', color: 'white', backgroundColor: !isMobile ? 'rgb(228, 132, 76) !important' : '#cd6444 !important', fontSize: !isMobile ? '16px' : '12px', p: !isMobile ? '0px 20px' : '', fontWeight: '700' }}>Click Here</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Product