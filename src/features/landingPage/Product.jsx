import ProductCards from "../reusables/ProductCards";
import style from './styles/Product.module.css';
import Content from "../reusables/Content";
import { useTheme, useMediaQuery, Grid, Button, Typography } from '@mui/material';
import ThreeGirl from '../../assets/image/ThreeGirl.png'
import { getAllProducts } from '../../api/Api';
import { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Product = () => {
    const navigate = useNavigate()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const[data, setData] = useState([])

    const fetchProducts = useCallback(async()=>{
        try {
            const response = await axios.get(getAllProducts)
            if(response.status === 200){
                const limitedData = response.data.response.data.slice(0, 4);
                setData(limitedData);
            }else{
                console.log('Unable to fetch data')
            }
        } catch (error) {
            console.log(error)
            throw error
        }
    }, [])
    
    useEffect(()=>{
        fetchProducts()
    }, [fetchProducts]);

    return (
        <Grid container p={!isMobile ? 5 : 2} rowGap={!isMobile ? 5 : isMobile ? 4 : 5}>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12} sx={{ textAlign: 'center', p: '10px 0', fontWeight: '700', color: !isMobile ? 'black' : 'white', backgroundColor: !isMobile ? '#e79595' : '#cd6444 !important', fontSize: !isMobile ? '40px' : isMobile ? '30px' : '35px' }}>Available Products</Grid>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12}>
                <Grid container rowSpacing={!isMobile ? 5 : isMobile ? 3 : 0} columnSpacing={!isMobile ? 5 : isMobile ? 12 : 0}>
                    {data.map((value, index) => (
                        <Grid item lg={3} sm={6} xs={12} xl={3} md={6} key={index}>
                            <ProductCards productId={value.id} image={Content[index].Image} name={value.name} price={value.price} />
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
                        <Button sx={{ borderRadius: '16px', color: 'white', backgroundColor: !isMobile ? 'rgb(228, 132, 76) !important' : '#cd6444 !important', fontSize: !isMobile ? '16px' : '12px', p: !isMobile ? '0px 20px' : '', fontWeight: '700' }} onClick={()=> navigate('/product')}>Click Here</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Product