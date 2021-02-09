import React from 'react'
import './RequestForm.scss'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll';
function RequestForm({data, lang, className}) {
    if (!className) className = '';
    let p1, p2, path;
    if (lang === 'ru') {
        p1 = 'Даю согласие на обработку персональных данных в соответствии с';
        p2 = 'правилами пользования сайтом.';
        path = '/privacy';
    }
    else if (lang === 'en') {
        p1 = ' I agree to the processing of personal data in accordance with';
        p2 = 'the rules for using the site.';
        path = '/en/privacy';
    }

    return (
        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
        <section className={"request-form " + className}>
            <div className="request-form--row">
                <div className="request-form--col">
                    <h3 className="section--heading section--heading_left request-form--title">{data.title}</h3>
                    <p className="request-form--desc">{data.description}</p>
                </div>
                <div className="request-form--col">
                    <form className="request-form--form form_short">
                        <div className="form--row">
                            <input type="text" className="form--input" name='fio' placeholder={data.formFields[0]} required/>
                        </div>
                        <div className="form--row">
                            <input type="tel" className="form--input" name='tel' placeholder={data.formFields[1]} required/>
                        </div>
                        <div class="form--row form--policy-acceptance">
                            <div class="checkbox">
                                <input class="custom-checkbox" type="checkbox" id="request-form-accept-checkbox" name="color-1" value="indigo" required/>
                                <label for="request-form-accept-checkbox">{p1}<Link to={path} >{p2}</Link></label>
                            </div>
                        </div>
                        <div class="form--row">
                            <input class="form--button button button_disable" type="submit" value="Отправить"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </ScrollAnimation>
    )
}

export default RequestForm