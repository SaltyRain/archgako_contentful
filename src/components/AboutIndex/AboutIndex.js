import React from 'react';
import './AboutIndex.scss';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

function AboutIndex({ lang, title, text, image, alt, buttontext, className }) {
    if (!className) className = '';

    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <section className={"about-index container " + className}>
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
              <Link to={lang === 'ru' ? '/about' : '/en/about'} className="button about-index--button">{buttontext}</Link>
            </div>

           
        </section>
        </ScrollAnimation>

    )
}

export default AboutIndex