import React from 'react'
import '../styles/templates/blog-post.scss'
import { graphql } from 'gatsby'
import { Animated } from "react-animated-css";
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO'

function BlogPost({data}) {
    let minutes;
    if (Number(data.contentfulBlogPost.readingTime) === 1)
        minutes = 'минута';
    else if (Number(data.contentfulBlogPost.readingTime) < 5 && Number(data.contentfulBlogPost.readingTime) > 1)
        minutes = 'минуты';
    else minutes = 'минут';

    const language = 'ru'
    return (
        <Layout location={location} lang={language}>
                          <SEO 
                lang = {language}
                title = {data.contentfulBlogPost.title}
                description = {data.contentfulBlogPost.description.description}
                image = {data.contentfulBlogPost.heroImage.file.url}
            />
            <div className="container container_small">
              <Animated>
            <article className="full-article" >
                <h1 className="page--heading">{data.contentfulBlogPost.title}</h1>
                <span className="article--article--reading-time">
                <span className="article--brown-text">Время прочтения:</span> {data.contentfulBlogPost.readingTime} {minutes}
                </span>
                <div className="full-article--body" dangerouslySetInnerHTML={{__html: data.contentfulBlogPost.body.childMarkdownRemark.html}}/>
            </article>
            </Animated>
            </div>     
            
        </Layout>
    )
}

export default BlogPost

export const blogPostQuery = graphql`
  query BlogPostRuBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: "ru"}) {
      title
      readingTime
      description {
        description
      }
      heroImage {
        file {
          url
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`