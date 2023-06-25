import FacebookIcon from '../../assets/image/Facebook.svg'
import InstagramIcon from '../../assets/image/Instagram.svg'
import TwitterIcon from '../../assets/image/Twitter.svg'
import style from './styles/Footer.module.css'
import { useTheme, useMediaQuery, Grid, Typography } from '@mui/material';

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return (
    <Grid container sx={{ backgroundColor: !isMobile ? '#e79595' : '#cd6444 ', padding:  '50px 40px', color: '#000' }} className={style.FooterContain}>
      <Grid item lg={12} xl={12} md={12} sm={12} xs={12} mb={ isMobile ? 2 : 0 }>
       <Grid container spacing={!isMobile ? 30 : 0}>
       <Grid item lg={7} xl={7} md={7} sm={12} xs={12} className={style.FCS} mb={ isMobile ? 4 : 0}>
          <Typography sx={{ fontSize:!isMobile ? '44px' : '30px', fontWeight: '700', color: '#000' }}>Amy Doll</Typography>
          <Typography  sx={{ fontSize:!isMobile ? '25px' : '17px', fontWeight: '600', color: '#000' }}>Amy Doll is a haven for everyone looking to take their overall skincare routine to a whole new level and experience.</Typography>
        </Grid>
        <Grid item lg={5} xl={5} md={5} sm={12} xs={12} style={{ alignSelf: 'center', fontWeight: '600', }}>
          <li style={{ listStyle: 'none' }}><a href="" style={{ textDecoration: 'none', color: '#000', fontSize: !isMobile ? '25px' : '17px', fontWeight: '600', paddingTop: !isMobile ? '100px' : '', }}>Contact Us</a></li>
          <li style={{ listStyle: 'none' }}><a href="" style={{ textDecoration: 'none', color: '#000', fontSize: !isMobile ? '25px' : '17px', fontWeight: '600' }}>Newsletter</a></li>
          <li style={{ listStyle: 'none' }}><a href="" style={{ textDecoration: 'none', color: '#000', fontSize: !isMobile ? '25px' : '17px', fontWeight: '600' }}>Book Session</a></li>
          <li style={{ listStyle: 'none' }}><a href="" style={{ textDecoration: 'none', color: '#000', fontSize: !isMobile ? '25px' : '17px', fontWeight: '600' }}>Available Products</a></li>
        </Grid>
       </Grid>
      </Grid>
      <Grid item lg={2} xl={2} md={2} sm={6} xs={6} sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={FacebookIcon} alt="FacebookIcon" />
        <img src={TwitterIcon} alt="TwitterIcon" />
        <img src={InstagramIcon} alt="InstagramIcon" />
      </Grid>
    </Grid>
  )
}

export default Footer