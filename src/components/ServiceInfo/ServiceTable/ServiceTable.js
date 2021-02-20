import React from 'react'
import parse from 'html-react-parser'

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

const PlanButton = ({ setPlan, setType }) => {}

// const parseTableHtml = (html) => {
//   const tableAsReactElement = parse(html)
//   console.log(tableAsReactElement, 'tableAsReactElement')
// }

function ServiceTable({ html, serviceType, setServicePlan }) {
  return <>{parse(html)}</>
}

export default ServiceTable
