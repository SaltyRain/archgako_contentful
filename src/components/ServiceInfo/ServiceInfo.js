import React from 'react'
import parse from 'html-react-parser'
import './ServiceInfo.scss'
import { classToServiceName, costOrAddServiceText } from './utils'
import ServiceTable from './ServiceTable/ServiceTable'

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

const getServiceInfoNode = ({ html, serviceType, setServicePlan }) => {
  return (
    <div className="service-info--wrapper">
      {html.includes('thead') ? (
        <ServiceTable html={html} setServicePlan serviceType={serviceType} />
      ) : (
        parse(html)
      )}
    </div>
  )
}

function ServiceInfo({ group, data, lang, activeInfo }) {
  const [serviceType, setServiceType] = React.useState(activeInfo)
  const [servicePlan, setServicePlan] = React.useState('')

  const squareRef = React.useRef(null)

  React.useEffect(() => {
    if (activeInfo) setServiceType(classToServiceName[`${activeInfo}`])
  }, [activeInfo])

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
            {getServiceInfoNode({
              html: service.body.childMarkdownRemark.html,
              setServiceType,
              setServicePlan,
            })}
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
