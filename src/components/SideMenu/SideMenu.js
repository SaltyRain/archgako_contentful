import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'


import './SideMenu.scss'

const text = {
    ru: 'Напишите нам',
    en: 'Send message'
}
function SideMenu({lang, location}) {
    let request;
    if (lang === 'ru')
        request = text.ru;
    else
        request = text.en;
    return (
        <div className="side-menu">
            <button className="side-menu--close close" type="button">
                <span className="close--inner">&#x274C;</span>
            </button>

            <Navigation lang={lang} location={location} />

            <Link to='/contacts'  className="button request">{request}</Link>

            <LanguageSelector
                lang={lang}
                className={'language-selector'}
                location={location}
            />
            
        </div>
    )
}

export default SideMenu
