import ProductCards from '../reusables/ProductCards'
import { useTheme, useMediaQuery, Grid, Typography, Box, Skeleton } from '@mui/material'
import { getAllProducts } from '../../api/Api'
import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'
import Loader from '../reusables/Loader'

const Product = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchProducts = useCallback(async () => {
    try {
      const response = await axios.get(getAllProducts)
      if (response.status === 200) {
        setData(response.data.response.data)
        setLoading(false)
      } else {
        // alert('Unable to fetch data')
      }
    } catch (error) {
      // alert(error)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

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
      sx={{
        boxShadow: '5px 2px 5px 2px #a19797',
        backgroundColor: 'white',
        p: !isMobile ? '30px' : '10px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      m={{ lg: 0, xl: 0, md: 0, sm: 0, xs: 0 }}
    >
      <Typography
        sx={{
          color: '#cd6444 !important',
          fontSize: !isMobile ? '22px' : '18px',
          fontWeight: '700',
          p: !isMobile ? '0px 0px 20px 0px' : '0px 0px 20px 0px',
          textAlignLast: 'center',
          width: '100%',
        }}
      >
        See All Product
      </Typography>
      {loading ? (
          <Grid container
          sx={centerTwoStyle}
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <Grid item lg={2.5} sm={6} xs={12} xl={2.5} md={3.5} key={index}>
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
          <Grid container spacing={{ xl: 3, lg: 3, md: 6, sm: 5, xs: 2 }}>
            {data.map((value, index) => (
              <Grid item lg={3} sm={6} xs={12} xl={3} md={3.8} key={value.id}>
                <ProductCards
                  productId={value.id}
                  image={value.image}
                  name={value.name}
                  price={value.price}
                  salesPrice={value.salesPrice}
                  description={value.description}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      )}
    </Grid>
  )
}

export default Product
