import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import AboutCountry from '../components/AboutCountry/AboutCountry'
import TeamMember from '../components/TeamMember/TeamMember'

import '../styles/pages/about.scss'

const AboutPage = ({ data, location }) => {
    console.log(data.allContentfulEmployee, 'HUI SOSI PIDOR')
    return (
        <Layout location={location} lang='ru'>
            <div className="container">
                <section className="about">
                    <h1 class="page--heading animate__animated animate__fadeIn">О студии</h1>

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
                    <h2 className="section--heading" data-aos="fade-up">Наша команда</h2>
                    {
                        data.allContentfulEmployee.nodes.map((item, index) => {
                            return (
                                <TeamMember 
                                member = {item}
                                extraClasses = {
                                    index % 2 !== 0 ? ['team-member--row_image-right', 'team-member--photo_right'] : ''
                                }
                                />
                            )
                        })
                    }
                </section>


                

            </div>
        </Layout>
    )
}

export default AboutPage

 export const aboutPageQuery = graphql`
    query aboutRuPageQuery {
        allContentfulAboutStudio(filter: {node_locale: {eq: "ru"}}) {
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

        allContentfulEmployee(filter: {node_locale: {eq: "ru"}}) {
            nodes {
              photo {
                description
                fixed(height: 300, width: 300) {
                    ...GatsbyContentfulFixed
                }
              }
              specialization
              phone
              name
              instagram
              education
              bio {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
    }
  
 `