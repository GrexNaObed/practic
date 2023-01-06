import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from 'src/utils/categories'
function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__info">
          <div className="header__info-left">
            <a href="#" className="header__info-link">Chat with us</a>
            <a href="tel:+420336775664" className="header__info-phone">+420 336 775 664</a>
            <a href="mailto:info@freshnesecom.com" className="header__info-mail">info@freshnesecom.com</a>
          </div>
          <nav className="header__info-nav">
            <Link to={ `/blogs` }>
              Blog
            </Link>
            <Link to={ `/about` }>
              About Us
            </Link>
            <Link to={ `/careers` }>
              Careers
            </Link>
          </nav>
        </div>
        <div className="header__present">
          <Link to='/'>
            <img
              className="header__present-logo"
              src="/imgs/logo.svg"
              alt="logo"
            />
          </Link>
          <div className="header__present-search">
            <div className="header__search-select">
              <div className="header__select-top">
                <span>All categories</span>
                <img className='header__select-carrot' src="/imgs/carrot-down.svg" alt="" />
              </div>
              <ul className="header__select-dropdown">
                <li className="header__select-item"></li>
              </ul>
            </div>
            <div className="header__search-input">
              <input type="text" placeholder='Search Products, categories ...' />
              <img src="/imgs/search.svg" alt="" />
            </div>
          </div>
          <nav className="header__present-nav">
            <Link to='/profile'>
              <img src="/imgs/user.svg" alt="" className="header__present-profile" />
            </Link>
            <div className="header__present-cart">
              <img src="/imgs/basket.svg" alt="" className="header__present-profile" />
              <div className="header__present-cart-count">4</div>
            </div>
          </nav>
        </div>
        <ul className="header__categories">
          {
            categories
              .map(category =>
                <li
                  key={ category.id }
                  className="header__categories-item"
                >
                  <span>{ category.title }</span>
                  <img src="/imgs/carrot-down.svg" alt="" />
                </li>
              )
          }
        </ul>
      </div>
    </header>
  )
}

export default Header