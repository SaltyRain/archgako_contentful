import React from 'react'
import { Link } from 'gatsby'

import './LanguageSelector.scss'

function LanguageSelector({ lang, location, className }) {
  return (
    <div className={"language-selector" + " " + className }>
      <span>
      <Link
        className='language-selector--link'
        to={location.pathname.replace('/' + lang + '/', '/')}
        activeClassName='language-selector--link_active'
        // partiallyActive={false}
      >
        ru
      </Link>
      <span className="language-selector--dash">|</span> 
      <Link 
      className='language-selector--link'
      to={
        location.pathname.includes('/en')
        ? `${location.pathname}`
        : `/en${location.pathname}`
      }
      activeClassName='language-selector--link_active'

      // partiallyActive={true}
      
      >
        en
      </Link>
      </span>

    </div>
  )
}

export default LanguageSelector
