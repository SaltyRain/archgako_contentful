import React from 'react';
import './AboutCountry.scss';
import Img from 'gatsby-image';


function AboutCountry({ extraClassNames, title, description, image, alt }) {        
    return (
            <div className="about-country">
                <div className={"about-country--map" + extraClassNames}>
                    <Img
                        fluid = {image}
                        alt = {alt}
                    />
                </div>
                <div className="about-country--description">
                    <h3 className="about-country--title">{title}</h3>
                    <p dangerouslySetInnerHTML={{__html: description }}/>
                </div>
            </div>
    )
}

export default AboutCountry;