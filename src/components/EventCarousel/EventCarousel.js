import React from 'react'
import './EventCarousel.scss'
import Slider from "react-slick";
import Img from 'gatsby-image'
import ScrollAnimation from 'react-animate-on-scroll';


export default ({events, className}) =>  {
    if (!className) className = '';
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: false,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              swipeToSlide: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              arrows: false,
              dots: true
              
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              arrows: false,
              dots: true

            }
          },
        ]
      };
    return (
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <section className={'container events ' + className}>
        <h3 className='events--title'>Последние события</h3>
        <Slider {...settings}>
          {
            events.map((event) => {
              return (
                <div className="event">
                  <a href={event.link} className="event--link">
                    <div className="event--wrapper">
                      <div className="event--img-bg"/>
                      <Img className="event--img" fluid={event.image.fluid} alt={event.image.title}/>
                      <p className="event--title">{event.title}</p>
                      <span className="event--year">{event.year}</span>
                    </div>
                  </a>
                </div>
              )
            })
          }
        </Slider>
      </section>
      </ScrollAnimation>
    )
}