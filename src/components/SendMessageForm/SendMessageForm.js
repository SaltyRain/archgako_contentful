import React from 'react';
import { Link } from 'gatsby';
import './SendMessageForm.scss';
import '../../styles/form.scss'

function SendMessageForm(form) {

    let privacy1, privacy2;
    if (form.form.formFields[0] === 'Ваше имя*') {
        privacy1 = 'Даю согласие на обработку персональных данных в соответствии с ';
        privacy2 = 'правилами пользования сайтом.';
    }
    else {
        privacy1 = 'I give for the provision of services in accordance with';
        privacy2 = 'site policy';
    }
    return (
        <section className="request-form section--index" id="request-form">
            <h3 className="section--heading section--heading_left request-form--title request-form--title_bold ">{form.form.title}</h3>
            <p className="brown-text request-form--desc arsenal">{form.form.description}</p>

            <form action="" className="form">
                <div className="form--row">
                    <input className="form--input" type="text" name="fio" placeholder={form.form.formFields[0]}/>
                </div>
                <div className="form--row">
                    <input className="form--input" type="email" name="email" placeholder={form.form.formFields[1]}/>
                </div>
                <div className="form--row">
                    <textarea className="form--textarea" rows="10" cols="45" name="message" placeholder={form.form.formFields[2]}/>
                </div>

                <div className="form--row form--policy-acceptance">
                    <div className="checkbox">
                        <input className="custom-checkbox" type="checkbox" id="request-form-accept-checkbox" name="color-1" value="indigo"/>
                        <label className="custom-checkbox--label" htmlFor="request-form-accept-checkbox">{privacy1}<Link to='privacy'>{privacy2}</Link></label>
                </div>

                <div className="form--row">
                    <input className="form--button button button_disable" type="submit" value="Отправить"/>
                </div>
                </div>
            </form>
        </section>
    )
}

export default SendMessageForm