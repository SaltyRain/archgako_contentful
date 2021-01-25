import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import './footer.scss'

import instLogo from '../../../static/images/smedia/instagram.svg'
import fbLogo from '../../../static/images/smedia/facebook.svg'

function Footer({ lang }) {
    const general = useStaticQuery(graphql`
    query footerGeneralQuery {
        contentfulCompanyContacts {
            email
            facebook
            instagram
          }
        allContentfulEmployee(filter: {node_locale: {eq: "ru"}}) {
            nodes {
              phone
            }
        }
        ruAdress: allContentfulCompanyContacts(filter: {node_locale: {eq: "ru"}}) {
            nodes {
              address
            }
          }
        
        enAdress: allContentfulCompanyContacts(filter: {node_locale: {eq: "en"}}) {
            nodes {
              address
            }
          }
    }
  `)
    let address;
    let policy;

    if (lang === 'ru') {
        policy = 'Политика конфиденциальности';
        address = general.ruAdress;
    }
    else {
        policy = 'Privacy policy';
        address = general.enAdress;
    }
      
    const phones = general.allContentfulEmployee.nodes.reduce((acc, node) => {
        if (node.phone.length > 1) {
        node.phone.forEach((node) => acc.push(node))
        }
        else
        acc.push(node.phone[0]);
        return acc;
        }, []) 

    
    return (
        <footer class="footer--wrapper">
            <div class="container">
                <div class="footer">
                    <div class="footer--column footer--logo">
                        <span class="footer--logo_archgako site-logo--archgako">ARCHGAKÒ</span>
                        <span class="footer--logo_sign site-logo--sign">architecture and interior design</span>
                    </div>
                    
                    <div class="footer--column footer--tel">
                        {
                            phones.map((item) => {
                                return (
                                    <a key={item} href={`tel:${item}`} className='team-member-contacts--text'>{item}</a>
                                )
                            })
                        }
                    </div>
            
                    <div class="footer--column">
                        <a href="https://yandex.ru/maps/?pt=37.647298,55.761558&z=18&l=map" class="footer--adress">{address.nodes[0].address}</a>
                        <a href="mailto:archgako@gmail.com" class="footer--mail">{general.contentfulCompanyContacts.email}</a>
                    </div>
            
                    <div class="footer--column">
                        <div class="footer--social-media">
                            <a href="https://www.instagram.com/archgako/"><img class="footer__social-media-item" src={instLogo} alt="ARCHGAKO в instagram" width="50px"/></a>
                            <a href="https://www.facebook.com/ARCHGAKO/"><img class="footer__social-media-item" src={fbLogo} alt="ARCHGAKO на facebook" width="50px"/></a>
                        </div>
                        <Link to='policy' class="footer--policy">{policy}</Link>
                        <span class="footer--copyright">2020 © Archgako</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer