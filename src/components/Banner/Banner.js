import React from 'react'
import './Banner.scss'
import '../ScrollDown/ScrollDown'
import ScrollDown from '../ScrollDown/ScrollDown'
import { Animated } from "react-animated-css";


function Banner() {
    return (
        <Animated animationInDuration={2000}>
            <section className="banner container animate__animated animate__fadeIn">
                <h1 className="visually-hidden">АРХИТЕКТУРНОЕ БЮРО Archgako</h1>
                <div className="banner-logo site-logo">
                    <span className="banner-logo--archgako site-logo--archgako">ARCHGAKÒ</span>
                    <span className="banner-logo--sign site-logo--sign">architecture and interior design</span>
                </div>
                <ScrollDown/>
            </section>
        </Animated>

    )
}

export default Banner