import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout/Layout'
import ContactsBlock from '../components/ContactsBlock/ContactsBlock'

// import '../styles/pages/services.scss'

const ServicesPage = ({ data, location }) => {
    return (
        <div className="container">
            <h1 class="page--heading animate__animated animate__fadeIn">Услуги</h1>
        </div>

    )
}

export default ServicesPage

