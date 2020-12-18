import React from 'react'
import './SiteLogo.scss'

function SiteLogo(props) {
  return (
    <div className={` ${props.wrapper} site-logo--wrapper`}>
      <span className={` ${props.archgako} site-logo--archgako`}>ARCHGAKÒ</span>
      <span className={` ${props.sign} site-logo--sign`}>
        architecture and interior design
      </span>
    </div>
  )
}

export default SiteLogo
