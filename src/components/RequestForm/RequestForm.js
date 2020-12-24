import React from 'react';
import './RequestForm.scss';

function RequestForm () {
    return (
        <section class="request-form section--index" id="request-form">
        <h3 class="section--heading section--heading_left request-form--title request-form--title_bold ">Отправить сообщение</h3>
        <p class="brown-text request-form--desc">Задайте интересующий вас вопрос. Мы свяжемся с вами в ближайшее время.</p>

        <form action="" class="form">
            <div class="form--row">
                <input class="form--input" type="text" name="fio" placeholder="Ваше имя*"/>
            </div>

            <div class="form--row">
                <input class="form--input" type="email" name="email" placeholder="E-mail*"/>
            </div>

            <div class="form--row">
                <textarea class="form--textarea" rows="10" cols="45" name="message" placeholder="Ваше сообщение" />
            </div>

            <div class="form--row form--policy-acceptance">
                <div class="checkbox">
                    <input class="custom-checkbox" type="checkbox" id="request-form-accept-checkbox" name="color-1" value="indigo"/>
                    <label class="custom-checkbox--label"for="request-form-accept-checkbox">Даю согласие на обработку персональных данных в соответствии с<a href="#" >правилами пользования сайтом.</a></label>
                </div>
            </div>

            <div class="form--row">
                <input class="form--button button button_disable" type="submit" value="Отправить"/>
            </div>
        </form>
    </section>
    )
}

export default RequestForm