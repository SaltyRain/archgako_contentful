import React from 'react';
import './TeamMember.scss';
import Img from 'gatsby-image';


function TeamMember({ extraClassNames, title, description, image, alt }) {        
    return (
        <section className="team-member">
            <div className="team-member--row">
                <div className="team-member--info">
                    <div className="team-member--title-wrapper">
                        <h3 className="team-member--name"></h3>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamMember;