import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from '../SiteLogo/SiteLogo'
import SideMenu from '../SideMenu/SideMenu'

import Hamburger from '../Hamburger/Hamburger'
import PhoneIcon from '../../../static/icon-phone.png'
import { Animated } from "react-animated-css";

import './Header.scss'



function Header({ lang, location }) {
  return (
    
    <header className="header container" id="header">
        {/* <Animated> */}
      <Link to="/"  className="header--site-logo site-logo">
        <SiteLogo
          wrapper="header--site-logo"
          archgako="header--archgako"
          sign="header--sign"
        />
      </Link>

      <div className="header--button-wrapper">
            <a href="tel:+79111620482" className="header--call-button">
                <span className="header--call-button-phone">+7 (911) 162-04-82</span>
                <img className="header--call-button-icon" src={PhoneIcon} alt="call the studio" width="30px" height="30px"/>
            </a>
            <Hamburger/>

      </div>

      <SideMenu
        lang = {lang}
        location = {location}
      />

      
      {/* </Animated> */}
    </header>
    
  )
}

export default Header
