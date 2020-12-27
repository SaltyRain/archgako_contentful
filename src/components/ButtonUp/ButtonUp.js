import React from 'react'
import { Link } from 'gatsby'

function ButtonUp() {
    return (
        <div className="container button-up--wrapper">
            <Link to="#header" id="buttonUp" className="button-up"></Link>
        </div>
    )
}

export default ButtonUp