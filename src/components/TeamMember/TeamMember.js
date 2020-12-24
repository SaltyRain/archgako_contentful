import React from 'react';
import './TeamMember.scss';
import Img from 'gatsby-image';


function TeamMember({ member, extraClasses }) {       
    console.log (member.phone, 'PISSSS') 
    return (
        <section className="team-member">
            <div className={"team-member--row " + extraClasses[0]}>
                <div className="team-member--info">
                    <div className="team-member--title-wrapper">
                        <h3 className="team-member--name">{member.name}</h3>
                        <ul className="team-member--specialization">
                            {
                                member.specialization.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <ul className="team-member--education">
                        {
                            member.education.map((item) => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    
                    <ul className="team-member--contacts">
                        <li>
                            <div class="contacts--icon contacts--icon_instagram"></div>
                            <a href={`https://www.instagram.com/${member.instagram}/`} class="member-contacts--text">@{member.instagram}</a>
                        </li>
                        <li>
                            <div class="contacts--icon contacts--icon_phone"></div>
                            <div class="member-contacts--items-wrapper">
                                    {
                                        member.phone.map((item) => {
                                            return (
                                                <a href={`tel:${item}`} class="member-contacts--text">{item}</a>
                                            )
                                        })
                                    }
                                
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={"team-member--photo " + extraClasses[1]}>
                    <Img 
                        fixed = {member.photo.fixed}
                        alt = {member.photo.description}
                    />
                </div>
            </div>
            <div className="team-member--desc" dangerouslySetInnerHTML={{__html: member.bio.childMarkdownRemark.html }}/>
        </section>
    )
}

export default TeamMember;