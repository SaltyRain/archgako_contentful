import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import '../styles/pages/policy.scss'
import SEO from '../components/SEO'

function PolicyPage({data, location}) {
    const language = 'en'
    return (
        <Layout location={location} lang={language}>
            <div className="container">
                <SEO 
                    lang = {language}
                    title = 'Personal data processing policy'
                />
                <h1 className="page--heading">Personal data processing policy</h1>
                <div
                className='policy'
                dangerouslySetInnerHTML={{
                    __html: data.contentfulPolicy.body.childMarkdownRemark.html,
                }}
                />
            </div>
            

        </Layout>
    )
}

export default PolicyPage

export const indexPageQuery = graphql`
    query policyEnPageQuery {
        contentfulPolicy(node_locale: {eq: "en"}) {
            body {
                childMarkdownRemark {
                  html
                }
          }
    }
}
`