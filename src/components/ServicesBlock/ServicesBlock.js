import React from 'react'
import ServiceButton from '../ServiceButton/ServiceButton'
import './ServicesBlock.scss'

const containerClassByGroup = {
  main: 'services-block_main',
  extra: 'services-block_extra',
}

const btnClassByGroup = {
  main: 'services-block--item_main',
  extra: 'services-block--item_extra',
}

function ServicesBlock({ group, data, setActiveInfo, activeInfo }) {
  const toggleBlock = ({ active }) => {
    setActiveInfo(active)
  }

  const servicesItems = data.filter(
    (serviceItem) => serviceItem.group === group
  )

  return (
    <div className={'services-block ' + containerClassByGroup[group]}>
      {servicesItems.map((item) => {
        return (
          <ServiceButton
            key={item.id}
            toggleBlock={toggleBlock}
            item={item}
            btnClass={btnClassByGroup[group]}
            group={group}
            activeBlock={activeInfo}
          />
        )
      })}
    </div>
  )
}

export default ServicesBlock
