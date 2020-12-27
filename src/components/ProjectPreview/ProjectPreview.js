import React from 'react'
import './ProjectPreview.scss';
import Img from 'gatsby-image'
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';

const textRu = {
    year: 'г',
    metr: 'м²',
    toProject: 'Перейти к проекту'
};
const textEn = {
    year: 'y',
    metr: 'm²',
    toProject: 'Go to project'
};

function ProjectPreview ({ lang, project }) {

    let text;
    if (lang === 'ru')
        text = textRu;
    else 
        text = textEn;

    return (
        <ScrollAnimation  animateIn='fadeIn' animateOnce={true}>
        <div className="project-preview">
            <div className="project-preview--baner">
                <Img  fluid={project.previewImage.fluid} alt={project.previewImage.title}/>
            </div>

            <div className="project-preview--row">
                <div className="project-preview--column">
                    <span className="project-preview--city">{project.city + ', ' + project.year+text.year}</span>
                    <span className="project-preview--area">{project.area + ' ' + text.metr}</span>
                </div>
                <div className="project-preview--column">
                    <h3 className="project-preview--title">{project.title}</h3>
                    <div className="project-preview--info-mobile">
                    <span className="project-preview--city">{project.city + ', ' + project.year+text.year}</span>
                    <span className="project-preview--area">{project.area + ' ' + text.metr}</span>
                    </div>
                    <div className="project-preview--desc" dangerouslySetInnerHTML={{
                __html: project.shortDescription.childMarkdownRemark.html,
                    }}/>
                </div>
                <div className="project-preview--column project-preview--scheme-wrapper">
                    <div className="project-preview--scheme">
                        <Img fluid={project.scheme.fluid} alt={project.scheme.title}/>
                    </div>
                    <ol className="project-preview--explication">
                        {
                            project.explication.map((item) => {
                                return (
                                    <li className="project-preview--explication-item" key={item}>
                                        {item}
                                    </li>
                                )
                            })
                        }
                    </ol>
                    <Link className="project-preview--link" to={`${location.pathname}/` + `${project.slug.toLowerCase()}`}>
                        <span className="project-preview--link-text">{text.toProject}</span>
                        <span className="project-preview--link-arrow" dangerouslySetInnerHTML={{__html: '&#10230'}}></span>
                    </Link>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    )
}

export default ProjectPreview