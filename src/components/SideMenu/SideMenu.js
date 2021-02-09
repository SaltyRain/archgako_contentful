import React, {useState} from 'react'
import { Link } from 'gatsby'

import Navigation from '../Navigation/Navigation'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import HeaderMobileContacts from '../HeaderMobileContacts/HeaderMobileContacts'
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './SideMenu.scss'

const text = {
    ru: 'Напишите нам',
    en: 'Send message'
}
function SideMenu({isOpened, clickHandler, lang, location}) {
    
    let request;
    if (lang === 'ru')
        request = text.ru;
    else
        request = text.en;

    
    return (
        <div className={isOpened ? 'side-menu side-menu_opened' : 'side-menu side-menu_closed'}>
            <button onClick={clickHandler} className="side-menu--close" type="button">
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

            <div className="side-menu--bottom-wrapper">
                <HeaderMobileContacts
                    lang={lang}
                    location={location}
                />
                <Link to='/contacts#request-form'  className="side-menu--request button">{request}</Link>
                {/* <AnchorLink className="side-menu--request button" offset='100' href="/contacts/#request-form">{request}</AnchorLink> */}
            </div>

        </div>
    )
}

export default SideMenu
