import React from 'react'
import './ServiceButton.scss'

function ServiceButton({ item, btnClass, group, toggleBlock, activeBlock }) {
  const [disabled, setDisabled] = React.useState(true)

  React.useEffect(() => {
    if (activeBlock !== item.id) setDisabled(true)
  }, [activeBlock])

  return (
    <button
      onClick={() => {
        if (activeBlock === item.id) {
          toggleBlock({ active: null })
          setDisabled(true)
          return
        }
        toggleBlock({ active: item.id })
        setDisabled(false)
      }}
      key={item.id}
      id={'btn-' + item.id}
      className={
        'services-block--item ' +
        btnClass +
        ` ${group}-${disabled ? 'disabled' : 'active'}`
      }
    >
      <h3>{item.title}</h3>
    </button>
  )
}

export default ServiceButton
