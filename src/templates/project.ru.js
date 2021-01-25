import React from 'react'
import '../styles/templates/project.scss'
import Layout from '../components/Layout/Layout'
import Img from 'gatsby-image'

function Project({data, location}) {
    console.log(data.contentfulProject.projectImages, 'IMAGES')

    const templateNumber = data.contentfulProject.templateNumber;
    if (templateNumber === 1) {
        return (
            <Layout location = {location} lang='ru'>
                <section className="container project-template">
                    <h1 className="page--heading project-template--heading">{data.contentfulProject.title}</h1>
                    <p className="project-template--area">общая площадь объекта {data.contentfulProject.area}м²</p>
                    <p className="project-template--city">{data.contentfulProject.city}</p>

                    <div className="">
                        <Img className='project-template--img_left' fluid={data.contentfulProject.projectImages[0].fluid} alt={data.contentfulProject.projectImages[0].title}/>
                        <div className="" dangerouslySetInnerHTML={{__html: data.contentfulProject.longDescription.childMarkdownRemark.html}}></div>
                        
                        <div class="project-template--sketch-wrapper">
                            <Img className="project-template--sketch-wrapper-image" fluid={data.contentfulProject.projectImages[1].fluid} alt={data.contentfulProject.projectImages[1].title}/>
                            <Img className="project-template--sketch-wrapper-image" fluid={data.contentfulProject.projectImages[2].fluid} alt={data.contentfulProject.projectImages[2].title}/>
                        </div>
                        
                    </div>
                   
                </section>
            
            </Layout>
        )
    }
    else {
        return (
            <Layout location = {location} lang='ru'>
            
            ProjectTemplateRu 2
        </Layout>
        )
    }
    // return (
        // <Layout location = {location} lang='ru'>
            
        //     ProjectTemplateRu
        // </Layout>
    // )
}

export default Project

export const ProjectQuery = graphql`
  query ProjectRuBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulProject(slug: { eq: $slug }, node_locale: {eq: "ru"}) {
        templateNumber
    title
    area
    city
    year
    longDescription {
      childMarkdownRemark {
        html
      }
    }
    projectImages {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
      title
    }
    scheme {
      fluid(maxWidth: 1000) {
        ...GatsbyContentfulFluid
      }
      title
    }
    explication
    }
  }
`