import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/Container'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ButtonUp from '../ButtonUp/ButtonUp'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
        <div class="container button-up--wrapper">
            <AnchorLink href="#header" id="buttonUp" class="button-up"></AnchorLink>
        </div>
        <Footer lang={lang} />
      </>
    )
  }
}

export default Template
