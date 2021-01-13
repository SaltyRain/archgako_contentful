import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import './Navigation.scss'

function Navigation({ lang, location, className }) {
  const data = useStaticQuery(graphql`
    query navQuery {
      ru: allContentfulNavigation(filter: { node_locale: { eq: "ru" } }) {
        edges {
          node {
            navItems
          }
        }
      }
      en: allContentfulNavigation(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            navItems
          }
        }
      }
    }
  `)
  const localeNavItems = (() => {
    if (lang === 'en') return data.en.edges[0].node.navItems
    if (lang === 'ru') return data.ru.edges[0].node.navItems
  })()

  const navTitleToLink = {
    'О студии': 'about',
    Проекты: 'projects',
    Услуги: 'services',
    Блог: 'blog',
    Контакты: 'contacts',
  }

  return (
    <nav className={`site-nav` + ` ` + className}>
      <ul className='site-nav--ul'>
        {localeNavItems.map((item) => {
          if (lang === 'ru')
            return (
              <li key={item} className="site-nav--li">
                <Link 
                to={'/' + `${navTitleToLink[item]}`}
                className="site-nav--a"
                activeClassName = 'site-nav--a_active'
                
                >{item}</Link>
              </li>
            )
          else
            return (
              <li key={item} className="site-nav--li">
                <Link 
                to={`${location.pathname}` + `${item.toLowerCase()}`}
                className="site-nav--a"
                activeClassName = 'site-nav--a_active'
                >
                  {item}
                </Link>
              </li>
            )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
