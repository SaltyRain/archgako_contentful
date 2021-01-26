import React from 'react';
import './ContactsBlock.scss';
import '../TeamMember/TeamMember.scss'
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import SendMessageForm from '../SendMessageForm/SendMessageForm'
import PhoneNormalize from '../PhoneNormalize/PhoneNormalize'


function ContactsBlock ({ mainInfo, phones, form }) {
    return (
        <div className="contacts--row">
            <div className="contacts--col">
                <p className="intro-text arsenal">{mainInfo.introText}</p>
                <ul className="team-member--contacts team-member--contacts_no-padding">
                    <li className="contacts--item_margin-bot">
                        <div className="contacts--icon contacts--icon_location contacts--icon_big-margin"/>
                        <div className="team-member-contacts--items-wrapper">
                            <a href={`https://yandex.ru/maps/?pt=37.647298,55.761558&z=18&l=map`} className="team-member-contacts--text">{mainInfo.address}</a>
                        </div>
                    </li>
                    <li className="contacts--item_margin-bot">
                        <div className="contacts--icon contacts--icon_mailbox contacts--icon_big-margin"/>
                        <div className="team-member-contacts--items-wrapper">
                                <a href={`mailto:${mainInfo.email}`} className="team-member-contacts--text">{mainInfo.email}</a>
                        </div>
                    </li>
                    <li className="contacts--item_margin-bot">
                        <div className="contacts--icon contacts--icon_phone contacts--icon_big-margin"/>
                        <div className="team-member-contacts--items-wrapper">
                            {
                                phones.map((item) => {
                                    return (
                                        <a key={item} href={`tel:${item}`} className='team-member-contacts--text'>{PhoneNormalize(item)[0]} <span className="brown-text">{PhoneNormalize(item)[1]}</span></a>
                                    )
                                })
                            }
                        </div>
                    </li>
                    <li>
                        <div className="contacts--icon contacts--icon_instagram contacts--icon_big-margin"></div>
                        <a href={`https://www.instagram.com/${mainInfo.instagram}`} className="team-member-contacts--text">@{mainInfo.instagram}</a>
                    </li>
                </ul>
            </div>
            <div className="contacts--col">
                <SendMessageForm form = {form} />
            </div>
            
        </div>
    )
}

export default ContactsBlock