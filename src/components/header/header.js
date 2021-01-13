import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from '../SiteLogo/SiteLogo'
import SideMenu from '../SideMenu/SideMenu'

import Hamburger from '../Hamburger/Hamburger'
import PhoneIcon from '../../../static/icon-phone.png'
import { Animated } from "react-animated-css";
import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

import './Header.scss'


const text = {
  ru: 'Напишите нам',
  en: 'Send message'
}
function Header({ lang, location }) {
  function closeMenu(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
}

let request;
if (lang === 'ru')
    request = text.ru;
else
    request = text.en;


  return (
    
    <header className="header container" id="header">
      <Link to="/"  className="header--site-logo site-logo">
        <SiteLogo
          wrapper="header--site-logo"
          archgako="header--archgako"
          sign="header--sign"
        />
      </Link>

      <Navigation 
        className='header--site-nav'
        lang={lang} 
        location={location} 
        />


      <div className="header--info-wrapper">
        <a href="tel:+79111620482" className="header--call-button">
            <span className="header--call-button-phone">+7 (911) 162-04-82</span>
            <img className="header--call-button-icon" src={PhoneIcon} alt="call the studio" width="30px" height="30px"/>
        </a>

        <Link to='/contacts' className="header--request button">{request}</Link>

        <LanguageSelector
          className = 'header--language-selector'
          lang={lang}
          location={location}
        />

        <Hamburger/>
        <SideMenu
          lang = {lang}
          location = {location}
        />

      </div>

    </header>
    
  )
}

export default Header
