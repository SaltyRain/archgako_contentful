import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import ContactsBlock from '../components/ContactsBlock/ContactsBlock'
import ServicesBlock from '../components/ServicesBlock/ServicesBlock'
// import '../styles/pages/services.scss'

const ServicesPage = ({ data, location }) => {
    return (
        <Layout location={location} lang="ru">
            <div className="container">
                <h1 className="page--heading animate__animated animate__fadeIn">Услуги</h1>
                <section>
                    <ServicesBlock
                    extraClass = 'services-block_main'
                    data = {data.allContentfulService.nodes}
                    />

                    <div className="service-info"
                        dangerouslySetInnerHTML={{
                        __html: data.allContentfulService.nodes[1].body.childMarkdownRemark.html,
                        }}
                    />
                </section>
            </div>
        </Layout>
    )
}

export default ServicesPage

export const pageQuery = graphql`
    query servicesRuQuery {
        allContentfulService(filter: {node_locale: {eq: "ru"}}) {
        nodes {
            body {
            childMarkdownRemark {
                html
            }
            }
            title
            price
            id
        }
        }
    }
  
`