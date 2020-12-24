import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from '../SiteLogo/SiteLogo'
import SideMenu from '../SideMenu/SideMenu'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import Navigation from '../Navigation/Navigation'

function Header({ lang, location }) {
  return (
    <header className="header container animate__animated  animate__fadeIn" id="header">
      <Link to="/"  className="header--site-logo site-logo">
        <SiteLogo
          wrapper="header--site-logo"
          archgako="header--archgako"
          sign="header--sign"
        />
      </Link>

      <div class="header--button-wrapper">
            <a href="tel:+79111620482" class="header--call-button">
                <img class="call-button--icon"src="./img/icon-phone.png" alt="Позвонить в студию" width="30px" height="30px"/>
            </a>
    
            <button class="header--hamburger hamburger" type="button">
                <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
                </span>
              </button>
      </div>

      <SideMenu
        lang = {lang}
        location = {location}
      />

      

    </header>
  )
}

export default Header
