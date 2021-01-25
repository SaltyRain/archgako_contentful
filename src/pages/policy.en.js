import React from 'react'

import Layout from '../components/Layout/layout'
import '../styles/pages/policy.scss'

function PolicyPage({data, location}) {
    return (
        <Layout location={location} lang='en'>
            <div className="container">
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