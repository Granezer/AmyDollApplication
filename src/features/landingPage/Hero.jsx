import style from './styles/Hero.module.css';
import { useTheme, useMediaQuery, Grid } from '@mui/material';
import BgLarge from '../../assets/image/BgLarge.jpeg'
import BgMid from '../../assets/image/BgMd.jpeg'

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container className={style.heroContain} sx={{ backgroundImage: !isMobile ? `url(${BgLarge})` : `url(${BgMid})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '500px' }}>
      <Grid item lg={12} md={12} sm={12} xs={12} xl={12} sx={{ backgroundColor: !isMobile ? 'rgb(189, 186, 186)' : 'white', height: !isMobile ? '50px' : '50px' }}>
        <Grid Container display={'flex'} p='10px 10px' textAlign="center">
          {!isMobile && (<Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
            <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="#">Services Offered</a></li>
          </Grid>
          )}
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
            <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="/product">Products</a></li>
          </Grid>
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
            <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="#">Spa</a></li>
          </Grid>
          <Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
            <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="#">Saloon</a></li>
          </Grid>
          {!isMobile && (
            <Grid item lg={2.4} xl={2.4} sm={5} xs={5} md={5}>
              <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="#">Pedicure & Medicure</a></li>
            </Grid>
          )}
         {isMobile &&(<Grid item lg={2.4} xl={2.4} sm={3} xs={3} md={3}>
            <li style={{ listStyle: 'none' }}><a style={{ textDecoration: 'none', color: !isMobile ? '#000' : '#cd6444', fontSize: !isMobile ? '18px' : '16px', fontWeight: '700' }} href="#">Pedicure</a></li>
          </Grid>)}
        </Grid>
      </Grid>
    </Grid >
  )
}

export default Hero