import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import AboutIndex from '../components/AboutIndex/AboutIndex' 


import '../styles/index.scss'

const RootIndex = ({ data, location }) => {
  console.log(data, 'PUIASD');
  return (
    <Layout location={location} lang="ru">
      <main>главная</main>
      <AboutIndex 
      lang="ru"
      title = {data.ru.edges[0].node.title}
      text = {data.ru.edges[0].node.shortAbout.childMarkdownRemark.html}
      image = {data.aboutImageIndex.edges[0].node.aboutImageIndex.fluid}
      alt = {data.aboutImageIndex.edges[0].node.aboutImageIndex.title}
      buttontext = "Подробнее"
      />
      

    </Layout>
  )
}

export default RootIndex

export const rootRuQuery = graphql`
  query rootRuQuery {
    ru: allContentfulAboutStudio(filter: {node_locale: {eq: "ru"}}) {
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
