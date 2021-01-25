import React from 'react'
import './ServicesBlock.scss'

function ServicesBlock({group, data}) {
    let newArray = data.filter((elem) => {
        if (elem.group === group) {
            return elem;
        }
    })

    let containerClass = '', btnClass = '';
    if (group === 'main') {
        containerClass = 'services-block_main';
        btnClass = 'services-block--item_main';
    }
    if (group === 'extra') {
        containerClass = 'services-block_extra';
        btnClass = 'services-block--item_extra';
    }


    return (
        <div className={"services-block " + containerClass}>
            {
                newArray.map((item) => {
                    return (
                        <button key = {item.id} id = {'btn-' + item.id} className={"services-block--item " + btnClass}>
                            <h3>{item.title}</h3>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default ServicesBlock;