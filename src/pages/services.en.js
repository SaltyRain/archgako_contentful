import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import ServicesBlock from '../components/ServicesBlock/ServicesBlock'
import ServiceInfo from '../components/ServiceInfo/ServiceInfo'

// import '../styles/pages/services.scss'

const ServicesPage = ({ data, location }) => {
  const language = 'en'
  const [activeMainInfo, setActiveMainInfo] = useState('')
  const [activeExtraInfo, setActiveExtraInfo] = useState('')

  return (
    <Layout location={location} lang={language}>
      <div className="container">
        <h1 className="page--heading animate__animated animate__fadeIn">
          Services
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
      </div>
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query servicesEnPageQuery {
    allContentfulService(filter: { node_locale: { eq: "en" } }) {
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
