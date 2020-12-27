import React from 'react'
import { Link } from 'gatsby'
import Container from '../container/container'

import Header from '../Header/Header'
import Footer from '../footer/footer'
import ButtonUp from '../ButtonUp/ButtonUp'

import './layout.scss'

class Template extends React.Component {
  render() {
    const { location, children, lang } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <>
        <Header lang={lang} location={location} />
        <main>
          {children}
          <ButtonUp/>
        </main>
        <Footer />
      </>
    )
  }
}

export default Template
