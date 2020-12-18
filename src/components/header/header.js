import React from 'react'
import { Link } from 'gatsby'
import Container from '../container/container'
import SiteLogo from '../site-logo/site-logo'

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