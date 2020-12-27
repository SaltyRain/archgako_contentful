import React from 'react'
import './Hamburger.scss'

function Hamburger() {
    return (
        <button className="header--hamburger hamburger" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger