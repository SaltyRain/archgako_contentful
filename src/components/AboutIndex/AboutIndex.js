import React from 'react'
import './AboutIndex.scss';
import Img from 'gatsby-image'
import { Link, graphql, useStaticQuery } from 'gatsby';


function AboutIndex({ lang, title, text, image, alt, buttontext }) {
    const data = useStaticQuery(graphql`
    query aboutIndexQuery {
        ru: allContentfulAboutStudio(filter: {node_locale: {eq: "ru"}}) {
          edges {
            node {
              title
              shortAbout {
                shortAbout
              }
            }
          }
        }
        en: allContentfulAboutStudio(filter: {node_locale: {eq: "en"}}) {
          edges {
            node {
              title
              shortAbout {
                shortAbout
              }
            }
          }
        }
        aboutImageIndex: allContentfulAboutStudio(filter: {node_locale: {eq: "en"}}) {
          edges {
            node {
              aboutImageIndex {
                fluid(maxWidth: 1200) {
                    ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `)

    // const localeNavItems = (() => {
    //     if (lang === 'ru') 
    //         return {
    //             fluid: data.ru.allContentfulAboutStudio.edges[0].node.aboutImageIndex.fluid,
    //             key: data.ru.allContentfulAboutStudio.edges[0].node.aboutImageIndex.fluid.src,
    //             alt: data.ru.allContentfulAboutStudio.edges[0].node.aboutImageIndex.title
    //         }
    //     else 
    //         return {
    //             fluid: data.en.allContentfulAboutStudio.edges[0].node.aboutImageIndex.fluid,
    //             key: data.en.allContentfulAboutStudio.edges[0].node.aboutImageIndex.fluid.src,
    //             alt: data.en.allContentfulAboutStudio.edges[0].node.aboutImageIndex.title
    //         }
    //   })()

    // console.log(data, 'DATA')
    return (
        <section className="about container">
            <div className="about--photo-wrapper">
                <h2 className="about--title"></h2>
                <Img
                className="about--photo" 
                fluid={image} 
                alt={alt}
                />
            </div>

            <div className="about--desc">
                <div className="about--text-wrapper" dangerouslySetInnerHTML={{
                __html: text,
              }}>
                </div>
            </div>

            <span className="about--est">est. 2017</span>

            <Link to={`${location.pathname}` + `about`} className="button about--button">{buttontext}</Link>
        </section>

    )
}

export default AboutIndex