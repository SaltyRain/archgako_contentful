import React from 'react'
import './ProjectsCarousel.scss'
import Slider from "react-slick";
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export default ({projects}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
  <div className="projects-index">
    <div className='projects-index--bg'>
      <div className="container">
        <Slider {...settings} className="projects-index--slider">
          {
            projects.map((project) => {
              return (
                <div className="projects-index--project project-index">
                    <Img className='project-index--img' fluid={project.mainPageImage.fluid} alt={project.mainPageImage.alt}/>
                    <div className="project-index--text-wrapper">
                      <Link className='project-index--title' to={'/projects/' + project.slug}>{project.title}, {project.area}м²</Link>
                      <p className="project-index--city">{project.city}</p>
                    </div>
                    <div className="project-index--desc-wrapper">
                      <p className="project-index--desc" dangerouslySetInnerHTML={{__html: project.shortDescription.childMarkdownRemark.html}}/>
                    </div>
                    
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  </div>

)
}