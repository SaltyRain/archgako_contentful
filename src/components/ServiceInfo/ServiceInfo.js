import React from 'react'
import './ServiceInfo.scss'

function wrapElem(elem) {
  const w1 = `<div class='service-info--price-container'>
                    <button class="service-info-rect"></button>
                    <span>`;
  const w2 = `</span></div>`;

  return w1 + elem + w2;
}
function parseThead(thead) {


  const basic = 'Basic', standart = 'Standart', premium = 'Premium';

  let startBasic, endBasic;
  let startStandart, endStandart;
  let startPremium, endPremium;

  startBasic = thead.indexOf(basic);
  endBasic = startBasic + basic.length;

  startStandart = thead.indexOf(standart, startBasic);
  endStandart = startStandart + standart.length;

  startPremium = thead.indexOf(premium, startStandart);
  endPremium = startPremium + premium.length;

  let result = '';
  if (startBasic !== -1) {
    result = thead.substring(0, startBasic) + wrapElem(basic) + thead.substring(endBasic, startStandart) + wrapElem(standart) + thead.substring(endStandart, startPremium) + wrapElem(premium) + thead.substring(endPremium, thead.length)
  }
  else {
    result = thead.substring(0, startStandart) +  wrapElem(standart) + thead.substring(endStandart, startPremium) + wrapElem(premium) + thead.substring(endPremium, thead.length)
  }
  return result;
}

function parseHtml(html) {
  // Если в блоке есть таблица
  let result;
  if (html.indexOf('<thead>') !== -1) {
      const start = html.indexOf('<thead>');
      const end = html.indexOf('</thead>') + 8;
      let thead = html.substring(start, end);
      let newHead = parseThead(thead);
      result = html.substring(0, start) + newHead + html.substring(end, html.length)
  }
  else {
    result = html;
  }
  return result;
}

function ServiceInfo({ group, data, lang, activeInfo }) {
  let newArray = data.filter((elem) => {
    if (elem.group === group) {
      return elem
    }
  })

  let constText = []
  if (lang === 'ru') {
    constText[0] = 'Стоимость услуги'
    constText[1] = 'Добавить услугу'
  } else {
    constText[0] = 'Service cost'
    constText[1] = 'Add service'
  }

  
  
  let servicePrice = (price) => {
    return (
      <div className="service-info--price-block">
        <div className="service-info-rect"></div>
        <p className="service-info--text">{constText[0]}</p>
        <p className="service-info--price">{price}</p>

        <button className="button service-info--button">{constText[1]}</button>
      </div>
    )
  }
  let serviceButton = (
    <div className="service-info--button_float-right">
      <button className="button service-info--button">{constText[1]}</button>
    </div>
  )

  const getActiveByGroup = () => {
    return group === 'main' ? 'active-main' : 'active-extra'
  }

  return (
    <>
      {newArray.map((item) => {
        const parsedHTML = parseHtml(item.body.childMarkdownRemark.html);
        return (
          <div
            key={item.id}
            className={
              `${
                item.price ? 'service-info' : 'service-info service-info_block'
              }` +
              ' ' +
              `${activeInfo === item.id ? getActiveByGroup() : 'hide'}`
            }
            id={item.id}
          >
            <div
              className="service-info--wrapper"
              dangerouslySetInnerHTML={{
                __html: parsedHTML,
              }}
            />
            {item.price ? servicePrice(item.price) : serviceButton}
          </div>
        )
      })}
    </>
  )
}

export default ServiceInfo
