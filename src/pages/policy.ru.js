import React from 'react'

import Layout from '../components/Layout/layout'
import '../styles/pages/policy.scss'

function PolicyPage({data, location}) {
    return (
        <Layout location={location} lang='ru'>
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