import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import AboutIndex from '../components/AboutIndex/AboutIndex' 


import '../styles/pages/index.scss'

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location} lang="en">
      <div className="container">
        <AboutIndex 
        lang="en"
        title = {data.ru.edges[0].node.title}
        text = {data.ru.edges[0].node.shortAbout.childMarkdownRemark.html}
        image = {data.aboutImageIndex.edges[0].node.aboutImageIndex.fluid}
        alt = {data.aboutImageIndex.edges[0].node.aboutImageIndex.title}
        buttontext = "Подробнее"
        />
      </div>

      

    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexEnPageQuery {
    ru: allContentfulAboutStudio(filter: {node_locale: {eq: "en"}}) {
      edges {
        node {
          title
          shortAbout {
            childMarkdownRemark {
              html
            }
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
`
