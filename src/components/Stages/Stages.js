import React from 'react'
import './Stages.scss'

export default ({}) => {
    return (
        <section className="stages">
            <div className="index-section">
                <div class="dot"></div>
                <h2 class="section--heading">Этапы работы</h2>
            </div>
            <div class="stages--intro-text">
                    <p
                        class="page-text_center page-text_tight page-text_close-paragraph"
                    >
                        Работа разбита на несколько этапов плавно перетекающих
                        друг в друга.
                    </p>
                    <p
                        class="page-text_center page-text_tight page-text_close-paragraph"
                    >
                        На каждой стадии проект обсуждается, корректируется,
                        согласуется и утверждается соответствующими актами.
                    </p>
            </div>

            <div className="stages--content-wrapper">
                <div className="stages--main-content">
                    <div className="stages--scroll-bar">
                        <img src="" alt=""/>
                    </div>
                </div>
                <div class="stages--main-content-wrapper">
                    
                </div>

                <div class="stages--photos-wrapper">
                        <div class="stages--photo">
                            <img
                                class="stages--photo-image"
                                src=""
                                alt=""
                            />
                            <div class="stages--photo-shadow"></div>
                        </div>
                        <div class="stages--photo">
                            <img
                                class="stages--photo-image"
                                src=""
                                alt=""
                            />
                            <div class="stages--photo-shadow"></div>
                        </div>
                    </div>
            </div>
        </section>
    )
}