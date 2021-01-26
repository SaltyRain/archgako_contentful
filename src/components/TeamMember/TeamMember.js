import React from 'react';
import './TeamMember.scss';
import Img from 'gatsby-image';
import ScrollAnimation from 'react-animate-on-scroll';
import PhoneNormalize from '../PhoneNormalize/PhoneNormalize'

function TeamMember({ member, extraClasses }) {       
    return (
        <section className="team-member">
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <div className={"team-member--row " + extraClasses[0]}>
                <div className="team-member--info">
                    <div className="team-member--title-wrapper">
                        <h3 className="team-member--name">{member.name}</h3>
                        <ul className="team-member--specialization">
                            {
                                member.specialization.map((item) => {
                                    return (
                                        <li key={item}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <ul className="team-member--education">
                        {
                            member.education.map((item) => {
                                return (
                                    <li key={item}>{item}</li>
                                )
                            })
                        }
                    </ul>
                    
                    <ul className="team-member--contacts">
                        <li>
                            <div className="contacts--icon contacts--icon_instagram"></div>
                            <a href={`https://www.instagram.com/${member.instagram}/`} className="team-member-contacts--text">@{member.instagram}</a>
                        </li>
                        <li>
                            <div className="contacts--icon contacts--icon_phone"></div>
                            <div className="team-member-contacts--items-wrapper">
                                    {
                                        member.phone.map((item) => {
                                            return (
                                                <a href={`tel:${item}`} key={item} className="team-member-contacts--text">{PhoneNormalize(item)[0]} <span className="brown-text">{PhoneNormalize(item)[1]}</span></a>
                                            )
                                        })
                                    }
                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={"team-member--photo " + extraClasses[1]}>
                    <div className={'team-member--photo-bg ' + extraClasses[2]}/>
                    <Img 
                        className={'team-member--photo-photo ' + extraClasses[3]} 
                        fixed = {member.photo.fixed}
                        alt = {member.photo.description}
                    />
                </div>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                <div className="team-member--desc" dangerouslySetInnerHTML={{__html: member.bio.childMarkdownRemark.html }}/>
            </ScrollAnimation>
            
        </section>
    )
}

export default TeamMember;