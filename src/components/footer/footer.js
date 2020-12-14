import React from 'react'

import './footer.scss'
import '../../scss/site-logo.scss'

export default () => (
<footer className="footer--wrapper">
<div className="container">
    <div className="footer">
        <div className="footer--column footer--logo">
            <span className="footer--logo_archgako site-logo--archgako">ARCHGAKÒ</span>
            <span className="footer--logo_sign site-logo--sign">architecture and interior design</span>
        </div>
        
        <div className="footer--column footer--tel">
            <a href="tel:+79111620482" className="footer-tel--item">+7 911 162 04 82 RUS</a>
            <a href="tel:+79216361451" className="footer-tel--item">+7 921 636 14 51 RUS</a>
            <a href="+393668202223" className="footer-tel--item">+39 366 82 02 223 EU</a>
        </div>

        <div className="footer--column">
            <a href="https://yandex.ru/maps/?pt=37.647298,55.761558&z=18&l=map" className="footer--adress">Москва, улица Макаренко, 5с 1а, <span className="footer--br">ст. м.Чистые пруды</span></a>
            <a href="mailto:archgako@gmail.com" className="footer--mail">archgako@gmail.com</a>
        </div>

        <div className="footer--column">
            <div className="footer--social-media">
                <a href="https://www.instagram.com/archgako/"><img className="footer__social-media-item" src="./img/instagram icon.svg" alt="ARCHGAKO в instagram" width="50px"/></a>
                <a href="https://www.facebook.com/ARCHGAKO/"><img className="footer__social-media-item" src="./img/facebook icon.svg" alt="ARCHGAKO на facebook" width="50px"/></a>
            </div>
            <a href="policy.html" className="footer--policy">Политика конфиденциальности</a>
            <span className="footer--copyright">2020 © Archgako</span>
        </div>
    </div>
</div>

</footer>
)
