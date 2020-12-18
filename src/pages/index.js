import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/layout/layout'
import SiteLogo from '../components/site-logo/site-logo'
import AboutIndex from '../components/about/about'

class RootIndex extends React.Component {
  render() {

    return (
      <Layout location={this.props.location}>
        <main>
            <AboutIndex></AboutIndex>
        </main>
      </Layout>
    )
  }
}

export default RootIndex
