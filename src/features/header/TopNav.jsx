import CartIcon from '../../assets/image/Cart.svg'
import SearchIcon from '../../assets/image/Search.svg'

const TopNav = () => {
  return (
    <div className="topNavContain">
      <div>Any Doll</div>
      <div>
        <input type="text" placeholder="Search for products..." />
        <div>
            <img src={SearchIcon} alt='SearchIcon' />
        </div>
      </div>
      <div>
        <p>Book Session</p>
        <img src={CartIcon} alt='CartIcon' />
      </div>
    </div>
  )
}

export default TopNav
