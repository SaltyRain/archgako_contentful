import React from 'react'
import './HeaderMobileContacts.scss'
import { useStaticQuery, graphql, Link } from 'gatsby'

import InstIcon from '../../../static/images/smedia/instagram.svg'
import FbIcon from '../../../static/images/smedia/facebook.svg'

function HeaderMobileContacts({lang, location}) {
    const data = useStaticQuery(graphql`
    query HeaderMobileContactsQuery {
        ru: contentfulCompanyContacts(node_locale: {eq: "ru"}) {

                address
                email
            
          }
          en: contentfulCompanyContacts(node_locale: {eq: "en"}) {

                address
                email
            
          }
          allContentfulEmployee(filter: {node_locale: {eq: "ru"}}) {
            nodes {
              phone
            }
          }
    }
  `)


  const phones = data.allContentfulEmployee.nodes.reduce((acc, node) => {
    if (node.phone.length > 1) {
    node.phone.forEach((node) => acc.push(node))
    }
    else
    acc.push(node.phone[0]);
    return acc;
    }, []) 

  
    return (
        <div className="mobile-contacts">
            <div className="mobile-contacts--smedia">
                <a href="https://www.instagram.com/archgako/"><img className="mobile-contacts--smedia-item" src={InstIcon} alt="ARCHGAKO в instagram" width="30px"/></a>   
                <a href="https://www.facebook.com/ARCHGAKO/"><img className="mobile-contacts--smedia-item" src={FbIcon} alt="ARCHGAKO на facebook" width="30px"/></a>
            </div>

            <div className="mobile-contacts--phones">
            {
                phones.map((item) => {
                    return (
                        <a key={item} href={`tel:${item}`} className='mobile-contacts--text'>{item}</a>
                    )
                })
            }
            </div>

            <a href="mailto:archgako@gmail.com" className="mobile-contacts--text mobile-contacts--item">{data.ru.email}</a>
            
        </div>
    )
}

export default HeaderMobileContacts