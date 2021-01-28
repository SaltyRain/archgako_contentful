import React from 'react'
import '../styles/templates/blog-post.scss'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'

function BlogPost({data, location}) {
    let minutes; 
    Number(data.contentfulBlogPost.readingTime) === 1 ? minutes = 'minute' : minutes = 'minutes';

    return (
        <Layout location={location} lang="en">
            <div className="container container_small">
            <article className="full-article" >
                <h1 className="page--heading">{data.contentfulBlogPost.title}</h1>
                <span className="article--article--reading-time">
                <span className="article--brown-text">Reading time:</span> {data.contentfulBlogPost.readingTime} {minutes}
                </span>
                <div className="full-article--body" dangerouslySetInnerHTML={{__html: data.contentfulBlogPost.body.childMarkdownRemark.html}}/>
            </article>
            </div>
        </Layout>
    )
}

export default BlogPost

export const blogPostQuery = graphql`
  query BlogPostEnBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: "en"}) {
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