import React from 'react'
import parse from 'html-react-parser'
import './ServiceInfo.scss'
import {
  classToServiceName,
  costOrAddServiceText,
  parseServiceTableHtml,
} from './utils'

const Elem = ({ plan }) => {
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

function parseTrAddThead(trHTML) {
  return (
    <thead
      dangerouslySetInnerHTML={{
        __html: trHTML,
      }}
    ></thead>
  )
}

function parseHtml(html) {
  // Если в блоке есть таблица
  if (html.indexOf('<thead>') !== -1) {
    const start = html.indexOf('<tr>')
    const end = html.indexOf('</tr>') + 5
    const tr = html.substring(start, end)
    console.log(tr, 'thead')
    const newHead = parseTrAddThead(tr)
    console.log(newHead, 'newHead')
  } else return html
}

const ServicePrice = ({ price, lang }) => {
  return (
    <div className="service-info--price-block">
      <div className="service-info-rect disabled"></div>
      <p className="service-info--text">{costOrAddServiceText[lang].price}</p>
      <p className="service-info--price">{price}</p>

      <button className="button service-info--button">
        {costOrAddServiceText[lang].add}
      </button>
    </div>
  )
}

const ServiceButton = ({ lang }) => {
  return (
    <div className="service-info--button_float-right">
      <button className="button service-info--button">
        {costOrAddServiceText[lang].add}
      </button>
    </div>
  )
}

const getServiceInfoHtml = (html) => {
  return (
    <div className="service-info--wrapper">
      {html.includes('thead') ? parseServiceTableHtml(html) : parse(html)}
    </div>
  )
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

  const servicesByGroup = data.filter(
    (serviceItem) => serviceItem.group === group
  )

  const getClassPropertyByGroup = () =>
    group === 'main' ? 'active-main' : 'active-extra'

  return (
    <>
      {servicesByGroup.map((service) => {
        return (
          <div
            key={service.id}
            className={
              `${
                service.price
                  ? 'service-info'
                  : 'service-info service-info_block'
              }` +
              ' ' +
              `${
                activeInfo === service.id ? getClassPropertyByGroup() : 'hide'
              }`
            }
            id={service.id}
          >
            {getServiceInfoHtml(service.body.childMarkdownRemark.html)}
            {service.price ? (
              <ServicePrice price={service.price} lang={lang} />
            ) : (
              <ServiceButton lang={lang} />
            )}
          </div>
        )
      })}
    </>
  )
}

export default ServiceInfo
