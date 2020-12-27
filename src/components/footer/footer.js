import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import './footer.scss'

function Footer({ lang, location }) {
    const data = useStaticQuery(graphql`
    query footerQuery {
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
  
    
    // const data = useStaticQuery(graphql`
    // query footerQuery {
    //    ru: contentfulCompanyContacts(node_locale: {eq: "ru"}) {
    //       address
    //       email
    //     }
    //     en: contentfulCompanyContacts(node_locale: {eq: "en"}) {
    //         address
    //         email
    //     }
    //     allContentfulEmployee(filter: {node_locale: {eq: "ru"}}) {
    //       nodes {
    //         phone
    //       }
    //     }
    // }
    // `)
    console.log(data, 'DATA')

    let policy;
    if (lang === 'ru') {
        policy = 'Политика конфиденциальности'
    }
    else {
        policy = 'Privacy policy';
    }
      
    const phones = data.allContentfulEmployee.nodes.reduce((acc, node) => {
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
                        <a href="https://yandex.ru/maps/?pt=37.647298,55.761558&z=18&l=map" class="footer--adress">Москва, улица Макаренко, 5с 1а, <span class="footer--br">ст. м.Чистые пруды</span></a>
                        <a href="mailto:archgako@gmail.com" class="footer--mail">archgako@gmail.com</a>
                    </div>
            
                    <div class="footer--column">
                        <div class="footer--social-media">
                            <a href="https://www.instagram.com/archgako/"><img class="footer__social-media-item" src="./img/instagram icon.svg" alt="ARCHGAKO в instagram" width="50px"/></a>
                            <a href="https://www.facebook.com/ARCHGAKO/"><img class="footer__social-media-item" src="./img/facebook icon.svg" alt="ARCHGAKO на facebook" width="50px"/></a>
                        </div>
                        <a href="policy.html" class="footer--policy">Политика конфиденциальности</a>
                        <span class="footer--copyright">2020 © Archgako</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer