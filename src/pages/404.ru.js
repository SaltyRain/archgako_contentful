import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/layout'
import img404 from '../../static/images/404.png'
import '../styles/pages/404.scss'

export default ({location}) => {
    const language = 'ru';
    return (
        <Layout location={location} lang={language}>
            <div className="container p404--container">
                <div className="p404--img-wrapper">
                    <img src={img404} alt="Страница не найдена"/>
                </div>
                <p className="p404--text">Простите, страница не найдена.</p>
                <Link to='/' className='button p404--button'>Вернуться на главную</Link>
            </div>
        </Layout>
    )
}