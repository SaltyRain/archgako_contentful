import React, {useState} from 'react'
import './Hamburger.scss'

function Hamburger({clickHandler}) {
    return (
        <button onClick={clickHandler} className="header--hamburger hamburger" type="button">
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
}

export default Hamburger