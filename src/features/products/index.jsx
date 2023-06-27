import Content from '../reusables/Content';
import ProductCards from '../reusables/ProductCards';
import { useTheme, useMediaQuery, Grid, Typography } from '@mui/material';
import { getAllProducts } from '../../api/Api';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const[data, setData] = useState([])

    const fetchProducts = useCallback(async()=>{
        try {
            const response = await axios.get(getAllProducts)
            if(response.status === 200){
                setData(response.data.response.data)
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
    }, [fetchProducts])

    console.log("data --> ", data)

    return (
        <Grid container sx={{ boxShadow: '5px 2px 5px 2px #a19797', backgroundColor: 'white', p: !isMobile ? '30px' : '10px', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} m={{ lg: 0, xl: 0, md: 0, sm: 0, xs: 0, }}>
            <Typography sx={{ color: '#cd6444 !important', fontSize: !isMobile ? '22px' : '18px', fontWeight: '700', p: !isMobile ? '0px 0px 20px 0px' : '0px 0px 20px 0px', textAlignLast: 'center', width: '100%' }}>See All Product</Typography>
            <Grid item lg={12} sm={12} xs={12} xl={12} md={12}>
            <Grid container spacing={{xl: 3, lg: 3, md: 3, sm: 5, xs: 2}}>
                    {data.map((value, index) => (
                        <Grid item lg={3} sm={6} xs={12} xl={3} md={4} key={value.id}>
                            <ProductCards productId={value.id} image={Content[index].Image} name={value.name} price={value.price} />
                        </Grid>
                    ))}
            </Grid>
            </Grid>
        </Grid>
    )
}

export default Product;