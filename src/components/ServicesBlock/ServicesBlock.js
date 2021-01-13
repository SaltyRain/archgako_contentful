import React from 'react'

function ServicesBlock({ data, extraClass }) {
    return (
        <div className={"services-block " + extraClass}>

            {
                data.map((item) => {
                    return (
                        <button className="services-block--item" id = {item.id} key={item.id}>
                            <h3>{item.title}</h3>
                        </button>
                    )
                })
            }


        </div>
    )
}

export default ServicesBlock