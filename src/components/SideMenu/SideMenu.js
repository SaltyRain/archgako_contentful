import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'


import './SideMenu.scss'

function SideMenu({lang, location}) {
    return (
        <div className="side-menu">
            <button className="side-menu--close close" type="button">
                <span className="close--inner">&#x274C;</span>
            </button>

            <Navigation lang={lang} location={location} />

            <Link to='/contacts'  className="button request">Напишите нам</Link>

            <LanguageSelector
                lang={lang}
                className={'language-selector'}
                location={location}
            />
            
        </div>
    )
}

export default SideMenu
