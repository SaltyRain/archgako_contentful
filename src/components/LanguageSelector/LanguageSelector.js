import React from 'react'
import { Link } from 'gatsby'

function LanguageSelector({ lang, location, className }) {
  return (
    <div className="language">
      <span>
      <Link className={className} to={`/en${location.pathname}`}>
        en
      </Link>
      <span className="language--dash">|</span> 
      <Link
        className={className}
        to={location.pathname.replace('/' + lang + '/', '/')}
      >
        ru
      </Link>
      </span>

    </div>
  )
}

export default LanguageSelector
