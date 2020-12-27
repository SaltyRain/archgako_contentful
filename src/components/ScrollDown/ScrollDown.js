import React from 'react';
import { Link } from 'gatsby'
import './ScrollDown.scss'

function ScrollDown() {
    return (
        <section className="scroll-down">
            <Link to="#about-index"><span></span></Link>
        </section>
    )
}

export default ScrollDown