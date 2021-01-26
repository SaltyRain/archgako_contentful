import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import './BlogPostPreview.scss'

function BlogPostPreview({locaiton, data}) {
    return (
        <article className="blog--article blog-article" data-aos="fade-up">
            <Link to={data.slug} className=' blog-article--link'>
                    <Img 
                        fluid = {data.heroImage.fluid}
                        className='blog-article--preview-image'
                        alt = {data.heroImage.description}
                        objectFit="contain"
                    />
                <h3 className="blog-article--title">{data.title}</h3>
                <p className="blog-article--desc arsenal">{data.description.description}</p>
                <span className="blog-article--date">{data.publishDate}</span>
            </Link>
        </article>
    )
}

export default BlogPostPreview