import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

const RootIndex = ({ data, location }) => {
  console.log(data, 'data')
  return (
    <Layout location={location} lang="en">
      <main>home</main>
    </Layout>
  )
}

export default RootIndex

export const rootEnQuery = graphql`
  query rootEnQuery {
    allContentfulAboutStudio(filter: { node_locale: { eq: "ru" } }) {
      edges {
        node {
          title
          shortAbout {
            shortAbout
          }
        }
      }
    }
  }
`
