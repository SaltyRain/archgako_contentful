import React from 'react'
import { Link } from 'gatsby'

import './LanguageSelector.scss'

function LanguageSelector({ lang, location, className }) {
  return (
    <div className={"language-selector" + " " + className }>
      <span>
      <Link
        to={location.pathname.replace('/' + lang + '/', '/')}
        activeStyle={{ textDecoration: 'underline' }}
        // partiallyActive={true}
      >
        ru
      </Link>
      <span className="language-selector--dash">|</span> 
      <Link 
      className={className} 
      to={
        location.pathname.includes('/en')
        ? `${location.pathname}`
        : `/en${location.pathname}`
      }
      activeStyle={{ textDecoration: 'underline' }}

      partiallyActive={true}
      
      >
        en
      </Link>
      </span>

    </div>
  )
}

export default LanguageSelector
