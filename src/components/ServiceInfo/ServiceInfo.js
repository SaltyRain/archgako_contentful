import React from 'react'
import './ServiceInfo.scss'

function convertTh(html) {
    
}

function ServiceInfo({group, data, lang}) {
    let newArray = data.filter((elem) => {
        if (elem.group === group) {
            return elem;
        }
    })

    let constText = [];
    if (lang === 'ru') {
        constText[0] = 'Стоимость услуги';
        constText[1] = 'Добавить услугу';
    }
    else {
        constText[0] = 'Service cost';
        constText[1] = 'Add service';
    }

    let buffer = data[0].body.childMarkdownRemark.html;
    console.log(typeof buffer, 'BUFFER')

    let servicePrice = ((price) => {
        return (
            <div class="service-info--price-block">
                <div class="service-info-rect"></div>
                <p class="service-info--text">{constText[0]}</p>
                <p class="service-info--price">{price}</p>
        
                <button class="button service-info--button">
                    {constText[1]}
                </button>
            </div>
        )

    })
    let serviceButton = <div class="service-info--button_float-right">
                            <button class="button service-info--button">
                                {constText[1]}
                            </button>
                        </div>

    return (
        <>
        {
            newArray.map((item) => {
                return (
                    <div key={item.id} className={(item.price ? "service-info" : 'service-info service-info_block')} id={item.id}>
                        <div className='service-info--wrapper' dangerouslySetInnerHTML={{__html: item.body.childMarkdownRemark.html}}/>
                        {
                            (item.price ? servicePrice(item.price) : serviceButton)
                        }

                    </div>
                    
                )
            })
        }
        </>
    )
}

export default ServiceInfo