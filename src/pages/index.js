import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'

class RootIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <main>
          главная
        </main>
      </Layout>
    )
  }
}

export default RootIndex

