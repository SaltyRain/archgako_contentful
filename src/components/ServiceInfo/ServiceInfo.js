import React from 'react'
import './ServiceInfo.scss'

function parseHtml(html) {
  const head = document.querySelector('thead')
  if (head) {
    const row = head.children[0]
    const rowChilds = Array.from(row.children)
    console.log(rowChilds, 'rowChilds')
    rowChilds.map((item, index) => {
      if (index >= 1) {
        // creating rect
        const priceRect = document.createElement('button')
        priceRect.classList.add('service-info-rect')

        // container for elements
        const priceContainer = document.createElement('div')
        priceContainer.classList.add('service-info--price-container')
        priceContainer.append(priceRect)

        // creating price span
        const innerItem = item.textContent
        console.log(innerItem, 'newInnerItem')
        item.innerHTML = ''
        const innerSpan = document.createElement('span')
        console.log(item, 'item')
        console.log(innerItem.split(' ')[0], 'split')
        console.log(innerItem.split(' ').slice(1).join(' '), 'left')
      // const newInnerItem =
      //   `${innerItem.split(' ')[0]}` +
      //   '<br>' +
      //   `${innerItem.split(' ').slice(1).join(' ')}`

      innerSpan.innerHTML = innerItem
      priceContainer.append(innerSpan)

      // append priceContainer to item
      item.append(priceContainer)
      // innerSpan.classList.add('service-info--price')
      priceContainer.append(innerSpan)

      item.append(priceContainer)
      console.log(innerItem, 'innterItem')
      item.append(priceContainer)
          }
        })
  }
  const thArray = [...html.match(/<\s*th[^>]*>([^<]*)<\s*\/\s*th\s*>/g)]
  // thArray.map((th) => console.log(th))
  console.log(thArray, 'thArray')
  return html;
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

  let buffer = data[0].body.childMarkdownRemark.html

  let servicePrice = (price) => {
    return (
      <div class="service-info--price-block">
        <div class="service-info-rect"></div>
        <p class="service-info--text">{constText[0]}</p>
        <p class="service-info--price">{price}</p>

        <button class="button service-info--button">{constText[1]}</button>
      </div>
    )
  }
  let serviceButton = (
    <div class="service-info--button_float-right">
      <button class="button service-info--button">{constText[1]}</button>
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
