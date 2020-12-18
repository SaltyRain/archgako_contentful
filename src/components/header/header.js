import React from 'react'
import { Link } from 'gatsby'
import Container from '../Container/Container'
import SiteLogo from '../SiteLogo/SiteLogo'

class Header extends React.Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <SiteLogo 
                    wrapper = "header--site-logo"
                    archgako = "header--archgako"
                    sign = "header--sign"
                    />
                </Link>

                
            </header>
        )

    }
}

export default Header