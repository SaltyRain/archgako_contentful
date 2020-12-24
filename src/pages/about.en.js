import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import AboutCountry from '../components/AboutCountry/AboutCountry'

import '../styles/pages/about.scss'

const AboutPage = ({ data, location }) => {
    return (
        <Layout location={location} lang='en'>
            <div className="container">
                <section className="about">
                    <h1 class="page--heading animate__animated animate__fadeIn">About</h1>

                    <div className="about--text-ful-width" 
                        dangerouslySetInnerHTML={{__html: data.allContentfulAboutStudio.edges[0].node.longAbout.childMarkdownRemark.html }}/>
                    <AboutCountry 
                        title = {data.allContentfulAboutStudio.edges[0].node.russiaTitle}
                        description = {data.allContentfulAboutStudio.edges[0].node.aboutRussia.childMarkdownRemark.html}
                        image = {data.allContentfulAboutStudio.edges[0].node.russianMap.fluid}
                        alt = {data.allContentfulAboutStudio.edges[0].node.russianMap.description}
                        extraClassNames = ''
                    />
                    <AboutCountry 
                        title = {data.allContentfulAboutStudio.edges[0].node.europeTitle}
                        description = {data.allContentfulAboutStudio.edges[0].node.aboutEurope.childMarkdownRemark.html}
                        image = {data.allContentfulAboutStudio.edges[0].node.europeMap.fluid}
                        alt = {data.allContentfulAboutStudio.edges[0].node.europeMap.description}
                        extraClassNames = ' about-country--map_right'
                    />
                </section>
                <section className="team">
                    <h2 className="section--heading" data-aos="fade-up">Our team</h2>
                </section>


                

            </div>
        </Layout>
    )
}

export default AboutPage

 export const aboutPageQuery = graphql`
    query aboutEnPageQuery {
        allContentfulAboutStudio(filter: {node_locale: {eq: "en"}}) {
        edges {
            node {
            aboutRussia {
                childMarkdownRemark {
                html
                }
            }
            aboutEurope {
                childMarkdownRemark {
                html
                }
            }
            europeMap {
                fluid(maxWidth: 600) {
                    ...GatsbyContentfulFluid
                }
                description
            }
            russianMap {
                fluid(maxWidth: 1200) {
                    ...GatsbyContentfulFluid
                }
                description
            }
            russiaTitle
            europeTitle

            longAbout {
                childMarkdownRemark {
                  html
                }
              }

            }

        }
        }
    }
  
 `