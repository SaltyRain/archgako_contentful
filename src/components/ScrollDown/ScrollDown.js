import React from 'react';
import { Link } from 'gatsby'
import './ScrollDown.scss'
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import AnchorLink from 'react-anchor-link-smooth-scroll';

function ScrollDown() {
    return (
        <section className="scroll-down">
            <AnchorLink  offset='100' href="#about-projects"><span></span></AnchorLink>
        </section>
    )
}

export default ScrollDown