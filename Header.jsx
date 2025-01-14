import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
      <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG25.png' alt='' />
      
      <div className="header_search">
        <input className='header_searchInput' type='text' />
        <SearchIcon className='header_searchIcon' />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className='header_optionLineOne'>Hello guest</span>
          <span className='header_optionLineTwo'>Sign in</span>
        </div>
        <div className="header_option">
          <span className='header_optionLineOne'>Returns</span>
          <span className='header_optionLineTwo'>& Orders</span>
        </div>
        <div className="header_option">
          <span className='header_optionLineOne'>Your</span>
          <span className='header_optionLineTwo'>Prime</span>
        </div>
        <div className="header_optionBasket">
          <ShoppingBasketIcon />
          <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
      </div>
    </div>
  )
}

export default Header;
