import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import AboutIndex from '../components/AboutIndex/AboutIndex' 


import '../styles/pages/index.scss'

const RootIndex = ({ data, location }) => {
  console.log(data, 'PUIASD');
  return (
    <Layout location={location} lang="en">
      <main>главная</main>
      <AboutIndex 
      lang="en"
      title = {data.ru.edges[0].node.title}
      text = {data.ru.edges[0].node.shortAbout.childMarkdownRemark.html}
      image = {data.aboutImageIndex.edges[0].node.aboutImageIndex.fluid}
      alt = {data.aboutImageIndex.edges[0].node.aboutImageIndex.title}
      buttontext = "More"
      />
      

    </Layout>
  )
}

export default RootIndex

export const rootEnQuery = graphql`
  query rootEnQuery {
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
