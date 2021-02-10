import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Animated } from "react-animated-css";

import Layout from '../components/Layout/Layout'
import ContactsBlock from '../components/ContactsBlock/ContactsBlock'
import Maps from '../components/Maps/Maps'
import SEO from '../components/SEO'

const ContactsPage = ({ data, location }) => {
    const phones = data.allContentfulEmployee.nodes.reduce((acc, node) => {
        if (node.phone.length > 1) {
        node.phone.forEach((node) => acc.push(node))
        }
        else
        acc.push(node.phone[0]);
        return acc;
        }, []) 
    const language = 'en';
    return (
        <Layout location={location} lang={language}>
            <div className="container">
              <SEO 
                  lang = {language}
                  title = 'Contacts'
              />
              <Animated>
                <h1 className="page--heading">Contacts</h1>
                  <ContactsBlock
                      mainInfo = {data.allContentfulCompanyContacts.nodes[0]}
                      phones = {phones}
                      form = {data.allContentfulForm.nodes[0]}
                  />
                  <Maps
                      data = {data.allContentfulCompanyContacts.nodes[0].mapImages}
                  />
              </Animated>
            </div>
        </Layout>
    )
}

export default ContactsPage

export const contactsPageQuery = graphql`
query contactsenPageQuery {
    allContentfulCompanyContacts(filter: {node_locale: {eq: "en"}}) {
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
    allContentfulEmployee(filter: {node_locale: {eq: "en"}}) {
        nodes {
          phone
        }
      }

    allContentfulForm(filter: {title: {eq: "Send a message"}, node_locale: {eq: "en"}}) {
      nodes {
        title
        slug
        description
        formFields
        privacy
      }
    }
  }
  
`