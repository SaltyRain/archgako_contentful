import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import AboutIndex from '../components/AboutIndex/AboutIndex' 
import Advantages from '../components/Advantages/Advantages'


import '../styles/pages/index.scss'

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location} lang="ru">
        <Banner/>
        <AboutIndex 
          lang="ru"
          title = {data.ru.edges[0].node.title}
          text = {data.ru.edges[0].node.shortAbout.childMarkdownRemark.html}
          image = {data.aboutImageIndex.edges[0].node.aboutImageIndex.fluid}
          alt = {data.aboutImageIndex.edges[0].node.aboutImageIndex.title}
          buttontext = "Подробнее"
        />
        <Advantages
          sectionHeading = {data.allContentfulHeading.nodes}
          advantages = {data.allContentfulAdvantage.nodes}
        />

    </Layout>
  )
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexRuPageQuery {
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
    allContentfulHeading(filter: {slug: {eq: "advantages"}, node_locale: {eq: "ru"}}) {
      nodes {
        title
      }
    }
    allContentfulAdvantage(filter: {node_locale: {eq: "ru"}}, sort: {order: ASC, fields: createdAt}) {
      nodes {
        title
        description
        id
        image {
          fixed(height: 85, width: 85) {
            ...GatsbyContentfulFixed
          }
          description
        }
        
      }
    }
  }
`
