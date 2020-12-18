import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

const RootIndex = ({ data, location }) => {
  return (
    <Layout location={location} lang="ru">
      <main>главная</main>
    </Layout>
  )
}

export default RootIndex

export const rootRuQuery = graphql`
  query rootRuQuery {
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
