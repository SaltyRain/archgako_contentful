import React from 'react'
import { Link } from 'gatsby'

import './LanguageSelector.scss'

function LanguageSelector({ lang, location, className }) {
  return (
    <div className="language-selector">
      <span>
      <Link
        className={className}
        to={location.pathname.replace('/' + lang + '/', '/')}
        activeStyle={{ textDecoration: 'underline' }}
        partiallyActive={true}
      >
        ru
      </Link>
      <span className="language-selector--dash">|</span> 
      <Link 
      className={className} 
      to={`/en${location.pathname}`}
      activeStyle={{ color: "red" }}
      partiallyActive={true}
      
      >
        en
      </Link>
      </span>

    </div>
  )
}

export default LanguageSelector
