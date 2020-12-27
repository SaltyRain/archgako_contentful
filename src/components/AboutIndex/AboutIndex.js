import React from 'react';
import './AboutIndex.scss';
import Img from 'gatsby-image';
import { Link } from 'gatsby';


function AboutIndex({ lang, title, text, image, alt, buttontext }) {
    return (
        <section className="about-index container" id='about-index'>
            <div className="about-index--photo-wrapper">
                <h2 className="about-index--title">{title}</h2>
                <Img
                className="about-index--photo" 
                fluid={image} 
                alt={alt}
                />
            </div>

            <div className="about-index--desc">
                <div className="about-index--text-wrapper" dangerouslySetInnerHTML={{
                __html: text,
              }}>
                </div>

              <span className="about-index--est">est. 2017</span>
              <Link to={`${location.pathname}` + `about`} className="button about-index--button">{buttontext}</Link>
            </div>

           
        </section>

    )
}

export default AboutIndex