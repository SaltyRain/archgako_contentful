import { mapKeys } from 'lodash';
import React from 'react';
import './Maps.scss';
import Img from 'gatsby-image'

function Maps({data}) {
    console.log(data, "MAPS")
    return (
        <section className="maps">
            {
                data.map((item) => {
                    return (
                        <div className="maps--item">
                            <Img fluid = {item.fluid} alt = {item.description} />
                            <span className="maps--name">{item.description}</span>
                        </div>
                    )

                })
            }
        </section>
    )
}

export default Maps