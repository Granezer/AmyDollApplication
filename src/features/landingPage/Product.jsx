import ProductCards from '../reusables/ProductCards'
import style from './styles/Product.module.css'
import {
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Typography,
  Box, Skeleton
} from '@mui/material';
import ThreeGirl from '../../assets/image/ThreeGirl.png';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext, SearchContext } from '../reusables/ProductContext';

const Product = () => {
  const navigate = useNavigate()
  const { products, loading } = useContext(ProductContext);
  const { searchText } = useContext(SearchContext);
  const [searchResultEmpty, setSearchResultEmpty] = useState(false);
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const filteredProducts = products.slice(0, 4).filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    setSearchResultEmpty(filteredProducts.length === 0);
  }, [filteredProducts]); 

  const centerTwoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mt: { md: 1 },
    rowGap: { lg: 2, xl: 4, sm: 3, xs: 5, md: 3 },
    columnGap: { lg: 1, xl: 1, sm: 20, xs: 10, md: 15 },
  }

  return (
    <Grid
      container
      p={!isMobile ? 5 : 2}
      rowGap={!isMobile ? 5 : isMobile ? 4 : 5}
    >
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        xl={12}
        md={12}
        sx={{
          textAlign: 'center',
          p: '10px 0',
          fontWeight: '700',
          color: !isMobile ? 'black' : 'white',
          backgroundColor: '#e79595',
          fontSize: !isMobile ? '40px' : isMobile ? '30px' : '35px',
        }}
      >
        Available Products
      </Grid>
      {loading ? (
        <Grid container
        sx={centerTwoStyle}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item lg={2.5} sm={6} xs={12} xl={2.5} md={2.5} key={index}>
            <Box>
              <Skeleton
                variant='rectangular'
                width=''
                height='200px'
                sx={{ margin: '20px 0px' }}
              />
              <Skeleton
                variant='rectangular'
                width=''
                height='90px'
                sx={{ margin: '30px 0px' }}
              />
              <Skeleton
                variant='rectangular'
                width=''
                height='50px'
                sx={{ margin: '30px 0px' }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      ) : (
        <Grid item lg={12} sm={12} xs={12} xl={12} md={12}>
          <Grid
            container
            rowSpacing={!isMobile ? 5 : isMobile ? 3 : 0}
            columnSpacing={!isMobile ? 5 : isMobile ? 12 : 0}
          >
            {searchResultEmpty ? (
            <Typography sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',  fontSize: {
              lg: '30px',
              md: '25px',
              sm: '20px',
              xs: '20px',
              xl: '30px',
            }, height: {
              lg: '100px',
              md: '100px',
              sm: '100px',
              xs: '100px',
              xl: '100px',
            }, fontWeight: 700, color: '#e79595' }}>
              Product with searched name not found.
            </Typography>
          ) : (
            filteredProducts.map((value, index) => (
              <Grid item lg={3} sm={6} xs={12} xl={3} md={4} key={index}>
                <ProductCards
                  productId={value.id}
                  image={value.image}
                  name={value.name}
                  price={value.price}
                  salesPrice={value.salesPrice}
                  description={value.description}
                />
              </Grid>
            ))
          )}
          </Grid>
        </Grid>
      )}
      <Grid item lg={12} sm={12} xs={12} xl={12} md={12} className={style.PdtT}>
        <Grid
          container
          backgroundColor='white'
          boxShadow='5px 2px 5px 2px #a19797'
        >
          <Grid
            item
            lg={8}
            sm={7}
            xs={7}
            xl={8}
            md={7}
            backgroundColor={'rgb(229, 175, 135)'}
            sx={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'center',
            }}
          >
            <img
              src={ThreeGirl}
              style={{ width: isMobile ? '80%' : '' }}
              alt=''
            />
          </Grid>
          <Grid
            item
            lg={4}
            sm={5}
            xs={5}
            xl={4}
            md={5}
            sx={{
              pl: '5px',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
            p={isMobile ? '10px' : ''}
          >
            <Typography
              sx={{
                p: '0px 2px',
                mb: '10px',
                fontSize: !isMobile ? '30px' : '14px',
                color: '#e79595',
                fontWeight: '700',
              }}
            >
              To see more Products for different skin tones
            </Typography>
            <Button
              sx={{
                borderRadius: '16px',
                color: 'white',
                backgroundColor: '#e79595',
                fontSize: !isMobile ? '16px' : '12px',
                p: !isMobile ? '0px 20px' : '',
                fontWeight: '700',
              }}
              onClick={() => navigate('/product')}
            >
              Click Here
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Product
