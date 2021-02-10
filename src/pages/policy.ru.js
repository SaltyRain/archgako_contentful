import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'
import '../styles/pages/policy.scss'
import SEO from '../components/SEO'
function PolicyPage({data, location}) {
    const language = 'ru'
    return (
        <Layout location={location} lang={language}>
            <SEO 
                lang = {language}
                title = 'Политика конфиденциальности'
            />
            <div className="container">
                <h1 className="page--heading">Политика в отношении обработки персональных данных</h1>
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
    query policyRuPageQuery {
        contentfulPolicy(node_locale: {eq: "ru"}) {
            body {
                childMarkdownRemark {
                  html
                }
          }
    }
}
`