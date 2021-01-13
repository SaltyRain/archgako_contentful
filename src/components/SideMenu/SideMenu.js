import React from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import HeaderMobileContacts from '../HeaderMobileContacts/HeaderMobileContacts'

import './SideMenu.scss'

const text = {
    ru: 'Напишите нам',
    en: 'Send message'
}
function SideMenu({lang, location}) {
    
    function closeMenu(e) {
        e.preventDefault();
        console.log('По ссылке кликнули.');
    }

    let request;
    if (lang === 'ru')
        request = text.ru;
    else
        request = text.en;

    
    return (
        <div className="side-menu">
            <button className="side-menu--close" type="button" onClick={closeMenu}>
                <span className="side-menu--close-inner">˟</span>
            </button>

            <LanguageSelector
                lang={lang}
                className={'language-selector'}
                location={location}
            />

            <Navigation 
            className = 'side-menu--site-nav'
            lang={lang} 
            location={location} />

            {/* <div className="side-menu--order-3"> */}
            <HeaderMobileContacts
                lang={lang}
                location={location}
            />
            <Link to='/contacts'  className="side-menu--request button">{request}</Link>

            {/* </div> */}



    



            
        </div>
    )
}

export default SideMenu
