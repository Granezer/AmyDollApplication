import FacebookIcon from '../../assets/image/Facebook.svg'
import InstagramIcon from '../../assets/image/Instagram.svg'
import TwitterIcon from '../../assets/image/Twitter.svg'

const Footer = () => {
  return (
    <div>
        <p>Amy Doll</p>
        <div>
        <div>
            Amy Doll is a haven for everyone looking to take their overall skincare routine to a whole new level and experience.
        </div>
        <nav>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Newsletter</a></li>
            <li><a href="">Book Session</a></li>
            <li><a href="">Available Products</a></li>
        </nav>
        </div>
        <div>
            <img src={FacebookIcon} alt="FacebookIcon" />
            <img src={TwitterIcon} alt="TwitterIcon" />
            <img src={InstagramIcon} alt="InstagramIcon" />
        </div>
    </div>
  )
}

export default Footer