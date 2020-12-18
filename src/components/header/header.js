import React from 'react'
import { Link } from 'gatsby'
import SiteLogo from '../SiteLogo/SiteLogo'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import Navigation from '../Navigation/Navigation'

function Header({ lang, location }) {
  return (
    <header>
      <Link to="/">
        <SiteLogo
          wrapper="header--site-logo"
          archgako="header--archgako"
          sign="header--sign"
        />
      </Link>
      <LanguageSelector
        lang={lang}
        className={'language-selector'}
        location={location}
      />
      <Navigation lang={lang} location={location} />
    </header>
  )
}

export default Header
