import React from 'react'
import Img from 'gatsby-image'
import './Advantages.scss'
import ScrollAnimation from 'react-animate-on-scroll';

function Advantages({ sectionHeading, advantages, className}) {
    if (!className) className = '';
    return (
        
        <section className={"container " + className}>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <div className="dot"></div>
                <h2 className="section--heading">{sectionHeading[0].title}</h2>
            </ScrollAnimation>
            <div className="advantages">
                {
                    advantages.map((advantage) => {
                        return (
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true} key={advantage.id}>
                                <div className="advantages--item advantage">
                                    <div className="advantage--image">
                                        <Img
                                            fixed={advantage.image.fixed}
                                            alt={advantage.image.description}
                                        />
                                    </div>
                                    <div className="advantage--text">
                                        <span className="advantage--heading">{advantage.title}</span>
                                        <p className="advantage--desc arsenal">{advantage.description}</p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Advantages