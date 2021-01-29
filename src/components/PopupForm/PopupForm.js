import React from 'react'
import './PopupForm.scss'

export default ({lang}) => {
    let data = {};
    const ru = {
        title: 'Заказать услуги',
        legend: 'Ваши контактные данные',
        formFields: ['Ваше имя*', 'Телефон*', 'E-mail*', 'Тип объекта', 'Площадь объекта', 'Комментарий к заказу', 'Прикрепить файлы'],
        objectType: ['Жилой интерьер/Квартира', 'Архитектура/Загородный дом', 'Офис', 'Ресторан/Бар/Кафе', 'Гостиница/Отель', 'Другое'],
        policy: ['Даю согласие на обработку персональных данных в соответствии с', 'правилами пользования сайтом.'],
        btn: 'Отправить',
        filesCount: 'Число файлов:'
    }
    const en = {
        title: 'Order services',
        legend: 'Your contact details',
        formFields: ['Your name*', 'Phone*', 'E-mail*', 'Object type', 'Object area', 'Comment', 'Attach files'],
        objectType: ['Residential Interior/Apartment', 'Architecture/Country House', 'Office', 'Restaurant/Bar/Cafe', 'Hotel', 'Other'],
        policy: [' I agree to the processing of personal data in accordance with', 'the rules for using the site.'],
        btn: 'Send',
        filesCount: 'Number of files:'
    }
    data = (lang === 'ru' ? ru : en); 

    return (
        <div className="b-popup" id="popup-form">
            <div className="b-popup-content">
                <form action="" className="b-popup--form form" id="services-form">
                    <h4 className="b-popup--title">{data.title}</h4>
                    <ul className="b-popup--fieldset b-popup--choosed-services"></ul>
                    <div className="b-popup--form-container">
                    <div className="b-popup--col">
                    <fieldset class="b-popup--fieldset">
                            <legend class="visually-hidden">{data.legend}</legend>
                            <ul role="none" class="b-popup--ul">
                                <li class="b-popup--form-item">
                                    <label class="visually-hidden" for="name">{data.formFields[0]}</label>
                                    <input class="form--input b-popup--form-input" type="text" id="name" name="user_name" placeholder={data.formFields[0]} required/>
                                </li>
                                <li class="b-popup--form-item">
                                    <label class="visually-hidden" for="tel">{data.formFields[1]}</label>
                                    <input class="form--input b-popup--form-input" type="tel" id="tel" name="user_tel" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" placeholder={data.formFields[1]} required/>
                                </li>
                                <li class="b-popup--form-item">
                                    <label  class="visually-hidden" for="mail">{data.formFields[2]}</label>
                                    <input class="form--input b-popup--form-input " type="email" id="mail" name="user_mail" placeholder={data.formFields[2]} required/>
                                </li>
                                <li class="b-popup--form-item">
                                    <select class="form--select b-popup--form-select" form="services-form" >
                                        <option class="form--option">{data.formFields[3]}</option>
                                        {
                                            data.objectType.map((item) => {
                                                return (
                                                    <option key={item} class="form--option">{item}</option>
                                                )
                                            })
                                        }
                                      </select>
                                </li>
                                <li class="b-popup--form-item ">
                                    <label  class="visually-hidden" for="area">{data.formFields[4]}</label>
                                    <input class="form--input b-popup--form-input" type="text" id="area" name="user_area" placeholder={data.formFields[4]} required/>
                                </li>
                            </ul>
                    </fieldset>
                    </div>

                    <div class="b-popup--col b-popup--comment-and-sumbit">
                        <div class="b-popup--row">
                            <div class="b-popup--form-input">
                                <label class="visually-hidden" for="comments">{data.formFields[5]}</label>
                                <textarea class="form--textarea b-popup--comment" name="user_comment" id="comment" placeholder={data.formFields[5]} rows="6"></textarea>
                            </div>
                            <div class="b-popup--form-input">
                                
                                <input class="inputfile" type="file" name="user_files" id="files" 
                                    data-multiple-caption={data.filesCount + "{count}"} 
                                    multiple 
                                    accept=".png, .jpg, .jpeg .pdf .doc .xlsx"></input>
                                <label for="files">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17">
                                        <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path>
                                    </svg>
                                    <span class="inputfile--span">{data.formFields[6]}</span>
                                </label>
                            </div>
                            <div class="b-popup--form-input form--policy-acceptance ">
                                <div class="checkbox">
                                    <input class="custom-checkbox" type="checkbox" id="request-form-accept-checkbox" name="color-1" value="indigo"/>
                                    <label for="request-form-accept-checkbox">{data.policy[0]}<a href="policy.html" >{data.policy[1]}</a></label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="b-popup--row">
                            <div class="b-popup--form-input">
                                <input class="form--button button button_disable b-popup--button" type="submit" value={data.btn}/>
                            </div>
                        </div>
                    </div>
                    </div>
                </form>
                
                <button class="b-popup--close" dangerouslySetInnerHTML={{__html: '&#10006'}}/>
                
            </div>
        </div>
    )
}

