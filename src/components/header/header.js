import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import SiteLogo from '../SiteLogo/SiteLogo'
import SideMenu from '../SideMenu/SideMenu'

import Hamburger from '../Hamburger/Hamburger'
import PhoneIcon from '../../../static/icon-phone.png'
import { Animated } from "react-animated-css";
import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import PhoneNormalize from '../PhoneNormalize/PhoneNormalize'

import './Header.scss'


const text = {
  ru: 'Напишите нам',
  en: 'Send message'
}
function Header({ lang, location }) {
  const data = useStaticQuery(graphql`
  query headerQuery {
    ruPhone: allContentfulEmployee(filter: {name: {eq: "Ксения Кондратович"}}) {
      nodes {
        phone
      }
    }
    euPhone: allContentfulEmployee(filter: {name: {eq: "Angelina Garipova"}}) {
      nodes {
        phone
      }
    }
  }
`)
let sitePhone; 
// data.ruPhone.nodes[0].phone[0];

if (lang === 'ru') 
  sitePhone = data.ruPhone.nodes[0].phone[0];
else
  sitePhone = data.euPhone.nodes[0].phone[1];

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
      <Link to={lang === 'ru' ? '/' : '/en/'}  className="header--site-logo site-logo">
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
        <a href={"tel:" + sitePhone} className="header--call-button">
            <span className="header--call-button-phone">{PhoneNormalize(sitePhone)[0]}</span>
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
