import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import img404 from '../../static/images/404.png'
import '../styles/pages/404.scss'

export default ({location}) => {
    const language = 'en';
    return (
        <Layout location={location} lang={language}>
            <div className="container p404--container">
                <div className="p404--img-wrapper">
                    <img src={img404} alt="Page not found"/>
                </div>
                <p className="p404--text">Sorry, page not found.</p>
                <Link to='/en/' className='button p404--button'>Back to the main page</Link>
            </div>
        </Layout>
    )
}