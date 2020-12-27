import { mapKeys } from 'lodash';
import React from 'react';
import './Maps.scss';
import Img from 'gatsby-image'

function Maps({data}) {
    return (
        <section className="maps">
            {
                data.map((item) => {
                    return (
                        <div className="maps--item" key={item.description}>
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