import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import {flatten} from 'lodash';

import Layout from '../components/Layout/Layout'
import ContactsBlock from '../components/ContactsBlock/ContactsBlock'
import Maps from '../components/Maps/Maps'


// import '../styles/pages/services.scss'

const ContactsPage = ({ data, location }) => {
    console.log (data.allContentfulEmployee.nodes, "NOED")
    const phones = data.allContentfulEmployee.nodes.reduce((acc, node) => {
        if (node.phone.length > 1) {
        node.phone.forEach((node) => acc.push(node))
        }
        else
        acc.push(node.phone[0]);
        return acc;
        }, []) 
    return (
        <Layout location={location} lang="ru">
            <div className="container">
                <h1 class="page--heading">Контакты</h1>
                <ContactsBlock
                    mainInfo = {data.allContentfulCompanyContacts.nodes[0]}
                    phones = {phones}
                />
                <Maps
                    data = {data.allContentfulCompanyContacts.nodes[0].mapImages}
                />
            </div>
        </Layout>
    )
}

export default ContactsPage

export const contactsPageQuery = graphql`
query contactsRuPageQuery {
    allContentfulCompanyContacts(filter: {node_locale: {eq: "ru"}}) {
      nodes {
        address
        email
        facebook
        addressCoordinates {
          lat
          lon
        }
        instagram
        introText
        mapImages {
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid
          }
          description
        }
      }
    }
    allContentfulEmployee(filter: {node_locale: {eq: "ru"}}) {
        nodes {
          phone
        }
      }
  }
  
`