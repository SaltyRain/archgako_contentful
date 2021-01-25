import React from 'react'
import '../styles/templates/blog-post.scss'

import Layout from '../components/Layout/Layout'

function BlogPost({data}) {
    let minutes;
    if (Number(data.contentfulBlogPost.readingTime) === 1)
        minutes = 'минута';
    else if (Number(data.contentfulBlogPost.readingTime) < 5 && Number(data.contentfulBlogPost.readingTime) > 1)
        minutes = 'минуты';
    else minutes = 'минут';

    return (
        <Layout location={location} lang="ru">
            <div className="container container_small">
            <article className="full-article" >
                <h1 className="page--heading">{data.contentfulBlogPost.title}</h1>
                <span className="article--article--reading-time">
                <span className="article--brown-text">Время прочтения:</span> {data.contentfulBlogPost.readingTime} {minutes}
                </span>
                <div className="full-article--body" dangerouslySetInnerHTML={{__html: data.contentfulBlogPost.body.childMarkdownRemark.html}}/>
            </article>
            </div>
        </Layout>
    )
}

export default BlogPost

export const blogPostQuery = graphql`
  query BlogPostRuBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: "ru"}) {
      title
      readingTime
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`