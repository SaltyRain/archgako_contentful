import React from 'react'
import './ServiceInfo.scss'

const classToServiceName = {
  'a3298215-d88a-58dc-beef-e55edb0c8bc6': 'designerDeparture',
  '6d413b04-6921-536b-84ce-aadd9c9ac90d': 'complectation',
  '7a8a1841-7877-5630-9ac8-f10217b0eaec': 'authorSupervision',
  '332fc7e2-1888-5af9-8554-653871e892a8': 'designProject',
  '108a3fca-b85f-57ef-bae4-526ad1da1767': 'expressDesign',
  'c2d57d1b-5c97-5451-9720-1f8d491a70dd': 'consultation',
}

function Elem({ plan }) {
  return (
    <button
      ref={squareRef}
      class={`service-info-rect ${plan.toLowerCase()}`}
    ></button>
  )
}

function wrapElem(elem) {
  // const w1 = `<div class='service-info--price-container'>
  //                   <button class="service-info-rect ${elem.toLowerCase()} ${(ref = squareRef)}"></button>
  //                   <span>`
  // const w2 = `</span></div>`
  return (
    <>
      <div class="service-info--price-container">
        <Elem plan={elem} />
        <span>{elem}</span>
      </div>
    </>
  )
  // return w1 + elem + w2
}

function parseThead(thead) {
  const basic = 'Basic',
    standart = 'Standart',
    premium = 'Premium'

  let startBasic, endBasic
  let startStandart, endStandart
  let startPremium, endPremium

  startBasic = thead.indexOf(basic)
  endBasic = startBasic + basic.length

  startStandart = thead.indexOf(standart, startBasic)
  endStandart = startStandart + standart.length

  startPremium = thead.indexOf(premium, startStandart)
  endPremium = startPremium + premium.length

  let result = ''
  if (startBasic !== -1) {
    result =
      thead.substring(0, startBasic) +
      wrapElem(basic) +
      thead.substring(endBasic, startStandart) +
      wrapElem(standart) +
      thead.substring(endStandart, startPremium) +
      wrapElem(premium) +
      thead.substring(endPremium, thead.length)
  } else {
    result =
      thead.substring(0, startStandart) +
      wrapElem(standart) +
      thead.substring(endStandart, startPremium) +
      wrapElem(premium) +
      thead.substring(endPremium, thead.length)
  }
  return result
}

function parseHtml(html) {
  // Если в блоке есть таблица
  let result
  if (html.indexOf('<thead>') !== -1) {
    const start = html.indexOf('<thead>')
    const end = html.indexOf('</thead>') + 8
    let thead = html.substring(start, end)
    let newHead = parseThead(thead)
    result =
      html.substring(0, start) + newHead + html.substring(end, html.length)
  } else {
    result = html
  }
  return result
}

function ServiceInfo({ group, data, lang, activeInfo }) {
  const [serviceType, setServiceType] = React.useState(activeInfo)
  const [servicePlan, setServicePlan] = React.useState('')

  const squareRef = React.useRef(null)

  React.useEffect(() => {
    const square = document.querySelectorAll('button.service-info-rect')
    console.log(squareRef, 'squareRef')
    // console.log(square, 'square')
  }, [])

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
        <div className="service-info-rect disabled"></div>
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
        const parsedHTML = parseHtml(item.body.childMarkdownRemark.html)
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
