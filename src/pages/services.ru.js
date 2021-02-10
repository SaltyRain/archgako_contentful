import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Animated } from 'react-animated-css'
import ScrollAnimation from 'react-animate-on-scroll';
import Layout from '../components/Layout/Layout'

import ServicesBlock from '../components/ServicesBlock/ServicesBlock'
import ServiceInfo from '../components/ServiceInfo/ServiceInfo'
import PopupForm from '../components/PopupForm/PopupForm'
import Advantages from '../components/Advantages/Advantages'
import Stages from '../components/Stages/Stages'


const ServicesPage = ({ data, location }) => {
  const language = 'ru'
  const [activeMainInfo, setActiveMainInfo] = useState('')
  const [activeExtraInfo, setActiveExtraInfo] = useState('')

  const [isPopupOpened, togglePopup] = useState(false);
  const togglePopupOpened = () => togglePopup(!isPopupOpened)

  return (
    <Layout location={location} lang={language}>
      <div className="container">
        <Animated>
          <h1 className="page--heading">
            Услуги
          </h1>
          <ServicesBlock
            group="main"
            data={data.allContentfulService.nodes}
            setActiveInfo={setActiveMainInfo}
          />
          <ServiceInfo
            group="main"
            data={data.allContentfulService.nodes}
            lang={language}
            activeInfo={activeMainInfo}
          />

          <ServicesBlock
            group="extra"
            data={data.allContentfulService.nodes}
            setActiveInfo={setActiveExtraInfo}
          />
          <ServiceInfo
            group="extra"
            data={data.allContentfulService.nodes}
            lang={language}
            activeInfo={activeExtraInfo}
          />
        </Animated>
      </div>
      

      
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <Stages
          data = {data.contentfulStages}
        />
      </ScrollAnimation>
        
      <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <Advantages
            className = 'index-section'
            sectionHeading = {data.allContentfulHeading.nodes}
            advantages = {data.allContentfulAdvantage.nodes}
        />
      </ScrollAnimation>
      


      <Animated>
      <div className="container b-popup--cart-wrapper">
        <button className="popup--cart" onClick = {togglePopupOpened}/>
      </div>
      </Animated>
      <PopupForm 
        isOpened = {isPopupOpened}
        clickHandler = {togglePopupOpened}
        lang={language} 
      />
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query servicesRuPageQuery {
    contentfulStages(node_locale: {eq: "ru"}) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      eachStage {
        title
        description
      }
      images {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid
        }
        title
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
    allContentfulService(filter: { node_locale: { eq: "ru" } }) {
      nodes {
        title
        group
        body {
          childMarkdownRemark {
            html
          }
        }
        price
        id
      }
    }
  }
`
