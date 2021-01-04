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
            <button className="side-menu--close close" type="button" onClick={closeMenu}>
                <span className="close--inner">˟</span>
            </button>

            <Navigation lang={lang} location={location} />

            {/* <div className="side-menu--order-3"> */}
            <HeaderMobileContacts
                lang={lang}
                location={location}
            />
            <Link to='/contacts'  className="request button">{request}</Link>

            {/* </div> */}


            <LanguageSelector
                lang={lang}
                className={'language-selector'}
                location={location}
            />
    



            
        </div>
    )
}

export default SideMenu
