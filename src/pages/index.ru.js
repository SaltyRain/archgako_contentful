import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import Banner from '../components/Banner/Banner'
import ProjectsCarousel from '../components/ProjectsCarousel/ProjectsCarousel'
import AboutIndex from '../components/AboutIndex/AboutIndex' 
import Advantages from '../components/Advantages/Advantages'
import RequestForm from '../components/RequestForm/RequestForm'
import EventCarousel from '../components/EventCarousel/EventCarousel'
import SEO from '../components/SEO'


import '../styles/pages/index.scss'

const IndexPage = ({ data, location }) => {
  const language = 'ru';
  return (
    <Layout location={location} lang={language}>
        <SEO 
          lang = {language}
          title = 'Главная'
        />
        <Banner/>
        <ProjectsCarousel 
          lang={language}
          className = 'index-section'
          projects = {data.allContentfulProject.nodes}
        />
        <AboutIndex 
          className = 'index-section'
          lang={language}
          title = {data.ru.edges[0].node.title}
          text = {data.ru.edges[0].node.shortAbout.childMarkdownRemark.html}
          image = {data.aboutImageIndex.edges[0].node.aboutImageIndex.fluid}
          alt = {data.aboutImageIndex.edges[0].node.aboutImageIndex.title}
          buttontext = "Подробнее"
        />
        <EventCarousel
          lang = {language}
          className = 'index-section'
          events = {data.allContentfulEvent.nodes}
        />
        <Advantages
          className = 'index-section'
          sectionHeading = {data.allContentfulHeading.nodes}
          advantages = {data.allContentfulAdvantage.nodes}
        />
        <RequestForm data = {data.contentfulForm} lang = {language} className='container index-section'/>
        

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
    contentfulForm(title: {eq: "Обратиться в студию"}) {
      title
      description
      formFields
      privacy
    }
    allContentfulEvent(filter: {node_locale: {eq: "ru"}}) {
      nodes {
        title
        image {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
          title
        }
        year
        link
      }
    }
    allContentfulProject(filter: {node_locale: {eq: "ru"}, onMainPage: {eq: true}}) {
      nodes {
        onMainPage
        mainPageImage {
          fluid(maxWidth: 1000) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
          }
          title
        }
        shortDescription {
          childMarkdownRemark {
            html
          }
        }
        title
        area
        city
        slug
      }
    }
  }
`
