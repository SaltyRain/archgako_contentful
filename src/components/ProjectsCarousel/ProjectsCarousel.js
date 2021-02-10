import React from 'react'
import './ProjectsCarousel.scss'
import Slider from "react-slick";
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';
import {Container} from 'react-bootstrap';

export default ({lang, projects, className}) => {
  let allProj = (lang === 'ru' ? 'Все проекты' : 'All projects'); 
  if (!className) className = '';
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          swipeToSlide: true
        }
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false

        }
      },
    ]
  };
return (
  <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
  <section className={"projects-index " + className} id='about-projects'>
    <div className='projects-index--bg'>
      <Container>
        <Slider {...settings} className="projects-index--slider">
          {
            projects.map((project) => {
              return (
                <div className="projects-index--project project-index">
                    <Img className='project-index--img' fluid={project.mainPageImage.fluid} alt={project.mainPageImage.alt}/>
                    <div className="project-index--text-wrapper">
                      <Link className='project-index--title' to={lang === 'ru' ? '/projects/' + project.slug : '/en/projects/' + project.slug}>{project.title}, {project.area}м²</Link>
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
        
        <div className="projects-index--all-projects_wrapper">
        <Link className='projects-index--all-projects' to={lang === 'ru' ? '/projects' : '/en/projects'}><span className='projects-index--all-projects_text'>{allProj}</span> <span className="projects-index--all-projects_arrow">&#129042;</span></Link>
        </div>
        
        
      </Container>
    </div>
  </section>
  </ScrollAnimation>

)
}