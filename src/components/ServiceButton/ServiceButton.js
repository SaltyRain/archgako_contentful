import React from 'react'
import './ServiceButton.scss'

function ServiceButton({
  onServiceButtonClick,
  activeBlock,
  item,
  btnClass,
  group,
}) {
  return (
    <button
      onClick={() => onServiceButtonClick({ active: item.id })}
      key={item.id}
      id={'btn-' + item.id}
      className={
        'services-block--item ' +
        btnClass +
        ` ${group}-${item.id === activeBlock ? 'active' : 'disabled'}`
      }
    >
      <h3>{item.title}</h3>
    </button>
  )
}

export default ServiceButton
