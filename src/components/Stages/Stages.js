import React from 'react'
import './Stages.scss'
import Img from 'gatsby-image'
import Scroll from '../../../static/images/stages-scroll.svg'

export default ({data}) => {
    return (
        <section className="stages">
            <div className="index-section">
                <div className="dot"/>
                <h2 className="section--heading">{data.title}</h2>
            </div>
            <div className="stages--intro-text">
                <p className="page-text_center page-text_tight page-text_close-paragraph"
                   dangerouslySetInnerHTML={{__html: data.description.childMarkdownRemark.html}}    
                />
            </div>

            <div className="stages--content-wrapper container">
                <div className="stages--main-content">
                    <div class="stages--scroll-bar-wrapper">
                        <div className="stages--scroll-bar">
                            <img src={Scroll} alt="Scroll bar"/>
                                <div className="stages--scroll-dot stages--scroll-dot_0"/>
                                <div className="stages--scroll-dot stages--scroll-dot_1"/>
                                <div className="stages--scroll-dot stages--scroll-dot_2"/>
                                <div className="stages--scroll-dot stages--scroll-dot_3"/>
                        </div>
                    </div>
                    
                    <div className="stages--main-content-wrapper">
                        {
                            data.eachStage.map((stage) => {
                                return (
                                <div key={stage.title} className="stages--stage-item stage-item">
                                    <h3 className="stage-item--title">{stage.title}</h3>
                                    <ul className="stage-item--ul">
                                    {
                                        stage.description.map((li) => {
                                            return (
                                                <li key={li} className="stage-item--li">{li}</li>
                                            )
                                        })
                                    }
                                    </ul>
                                </div>
                                )
                                
                            })
                        }
                    </div>
                </div>
                <div className="stages--photos-wrapper">
                    {
                        data.images.map((img, index) => {
                            return (
                                <div className='stages--each-photo-wrapper'>
                                    <div className={'stages--photo-bg stages--photo-bg_' + index}/>
                                    <Img className={'stages--photo stages--photo_' + index}
                                        fluid = {img.fluid}
                                        alt = {img.title}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}