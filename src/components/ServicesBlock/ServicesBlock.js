import React from 'react'
import ServiceButton from '../ServiceButton/ServiceButton'
import './ServicesBlock.scss'

function ServicesBlock({ group, data, setActiveInfo }) {
  const [activeBlock, setActiveBlock] = React.useState('')
  // console.log(activeBlock, 'activeBlock')
  const openInfo = ({ active }) => {
    setActiveBlock(active)
    setActiveInfo(active)
  }

  let newArray = data.filter((elem) => {
    if (elem.group === group) {
      return elem
    }
  })

  let containerClass = '',
    btnClass = '',
    btnClassOpened = ''
  if (group === 'main') {
    containerClass = 'services-block_main'
    btnClass = 'services-block--item_main'
    btnClassOpened = 'services-block--item_main-active'
  }
  if (group === 'extra') {
    containerClass = 'services-block_extra'
    btnClass = 'services-block--item_extra'
    btnClassOpened = 'services-block--item_extra-active'
  }

  return (
    <div className={'services-block ' + containerClass}>
      {newArray.map((item) => {
        return (
          <ServiceButton
            key={item.id}
            onServiceButtonClick={openInfo}
            activeBlock={activeBlock}
            item={item}
            btnClass={btnClass}
            group={group}
          />
        )
      })}
    </div>
  )
}

export default ServicesBlock
