import React from 'react'
import Img from 'gatsby-image'
import './Advantages.scss'

function Advantages({ sectionHeading, advantages}) {
    return (
        <section className="container">
            <div className="dot"></div>
            <h2 className="section--heading">{sectionHeading[0].title}</h2>
            <div className="advantages">
                {
                    advantages.map((advantage) => {
                        return (
                            <div className="advantages--item advantage" key={advantage.id}>
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
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Advantages