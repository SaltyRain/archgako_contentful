import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

import ServicesBlock from '../components/ServicesBlock/ServicesBlock'
import ServiceInfo from '../components/ServiceInfo/ServiceInfo'

// import '../styles/pages/services.scss'

const ServicesPage = ({ data, location }) => {
    return (
        <Layout location={location} lang="ru">
            <div className="container">
                <h1 className="page--heading animate__animated animate__fadeIn">Услуги</h1>
                <ServicesBlock
                    group = 'main'
                    data = {data.allContentfulService.nodes}
                />
                <ServiceInfo 
                    group = 'main'
                    data = {data.allContentfulService.nodes}
                    lang = 'ru'
                />

                <ServicesBlock
                    group = 'extra'
                    data = {data.allContentfulService.nodes}
                />
                <ServiceInfo 
                    group = 'extra'
                    data = {data.allContentfulService.nodes}
                    lang = 'ru'
                />
            </div>
        </Layout>
    )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query servicesRuPageQuery {
    allContentfulService(filter: {node_locale: {eq: "ru"}}) {
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