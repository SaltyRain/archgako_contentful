import React from 'react'
import '../styles/templates/project.scss'
import Layout from '../components/Layout/Layout'
import Img from 'gatsby-image'

function Project({data, location}) {
    let textContent = data.contentfulProject.longDescription.childMarkdownRemark.html;
    const language = 'ru';
    function sliceText(text) {
      let p1,p2,p3,p4;
      let end1,end2,end3;
      end1 = text.indexOf('</p>', 500);
      p1 = text.substr(end1, text.length) == '</p>' ? text.substr(0, end1) : text.substr(0, end1) + '</p>';
      end2 = text.indexOf('</p>', 800);
      p2 = text.substr(end2, text.length) == '</p>' ? text.substr(end1 + 4, end2) : text.substr(end1 + 4, end2) + '</p>';
      end3 = text.indexOf('</p>', 1100);
      p3 = text.substr(end3, text.length) == '</p>' ? text.substr(end2 + 4, end3) : text.substr(end2 + 4, end3) + '</p>';
      p4 = text.substr(end3, text.length);
      let result = [p1,p2,p3,p4]
      return result;
    }
    const textArray = sliceText(textContent);

    function addLastText(text) {
      if (text !== '</p>') {
        return <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: text}}/>
      }
    }

    const templateNumber = data.contentfulProject.templateNumber;
    if (templateNumber === 1) {
        return (
            <Layout location = {location} lang={language}>
                <article className="container project-template">
                    <h1 className="page--heading project-template--heading">{data.contentfulProject.title}</h1>
                    <p className="project-template--area">общая площадь объекта {data.contentfulProject.area}м²</p>
                    <p className="project-template--city">{data.contentfulProject.city}</p>

                    <div className="project-template--part">
                        <Img className='project-template--big-image project-template--big-image_no-hide project-template--big-image_left' fluid={data.contentfulProject.projectImages[0].fluid} alt={data.contentfulProject.projectImages[0].title}/>
                        <div className="project-template--content-wrapper">
                          <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: textArray[0]}}/>
                          <div class="project-template--sketch-wrapper">
                              <Img className="project-template--img-wrapper" fluid={data.contentfulProject.projectImages[1].fluid} alt={data.contentfulProject.projectImages[1].title}/>
                              <Img className="project-template--img-wrapper" fluid={data.contentfulProject.projectImages[2].fluid} alt={data.contentfulProject.projectImages[2].title}/>
                          </div>
                        </div>
                    </div>

                    <div className="project-template--part">
                      <div className="project-template--content-wrapper">
                        <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: textArray[1]}}/>
                        <div class="project-template--scheme-wrapper">
                            <Img className="project-template--scheme" fluid={data.contentfulProject.scheme.fluid} alt={data.contentfulProject.scheme.alt}/>
                            <ol className="project-preview--explication">
                            {
                                data.contentfulProject.explication.map((item) => {
                                    return (
                                        <li className="project-preview--explication-item" key={item}>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                        </div>
                        </div>
                        <Img className="project-template--big-image project-template--big-image_right" fluid={data.contentfulProject.projectImages[3].fluid} alt={data.contentfulProject.projectImages[3].title}/>
                    </div>
                    
                    <div className="project-template--part">
                      <Img className="project-template--big-image project-template--big-image_left" fluid={data.contentfulProject.projectImages[4].fluid} alt={data.contentfulProject.projectImages[4].title}/>
                      <div className="project-template--content-wrapper">
                        <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: textArray[2]}}/>
                        <div class="project-template--sketch-wrapper">
                              <Img className="project-template--img-wrapper" fluid={data.contentfulProject.projectImages[5].fluid} alt={data.contentfulProject.projectImages[5].title}/>
                              <Img className="project-template--img-wrapper" fluid={data.contentfulProject.projectImages[6].fluid} alt={data.contentfulProject.projectImages[6].title}/>
                        </div>
                      </div>
                    </div>

                    {addLastText(textArray[3])}
                </article>
            </Layout>
        )
    }
    else {
        return (
            <Layout location = {location} lang={language}>
              <article className="container project-template">
                  <h1 className="page--heading project-template--heading">{data.contentfulProject.title}</h1>
                  <p className="project-template--area">общая площадь объекта {data.contentfulProject.area}м²</p>
                  <p className="project-template--city">{data.contentfulProject.city}</p>

                  <div className="project-template--part project-template-part_v2">
                    <div className="project-template-part-v2--left">
                      <div className="project-template--text-wrapper " dangerouslySetInnerHTML={{__html: textArray[0]}}/>
                      <Img className='project-template--image project-template--image_margin-top' fluid={data.contentfulProject.projectImages[0].fluid} alt={data.contentfulProject.projectImages[0].title}/>
                    </div>
                    <div className="project-template-part-v2--right">
                      <Img className='project-template--image project-template--image_margin-bottom' fluid={data.contentfulProject.projectImages[1].fluid} alt={data.contentfulProject.projectImages[1].title}/>
                      <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: textArray[1]}}/>
                    </div>
                  </div>

                  <div className="project-template--part">
                    <div className="project-template--content-wrapper project-template--content-wrapper project-template--content-wrapper_w50">
                      <div className="project-template--text-wrapper" dangerouslySetInnerHTML={{__html: textArray[2]}}/>
                    </div>
                  </div>
              </article>  
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