import React from 'react'
import { Link } from 'gatsby'

function LanguageSelector({ lang, location, className }) {
  return (
    <>
      <Link className={className} to={`/en${location.pathname}`}>
        en
      </Link>
      <Link
        className={className}
        to={location.pathname.replace('/' + lang + '/', '/')}
      >
        ru
      </Link>
    </>
  )
}

export default LanguageSelector
