import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import BlogPostPreview from '../components/BlogPostPreview/BlogPostPreview'

const BlogPage = ({ data, location }) => {
    return (
        <Layout location={location} lang="en">
            <div className="container blog">
                <h1 className="page--heading animate__animated animate__fadeIn">Blog</h1>
                <p className="intro-text animate__animated animate__fadeIn">
                We talk about interior design, color and architecture. Sharing our experience ... We are talking about interior design, color and architecture. We share our personal experience.
                </p>
                <section className="blog--articles">
                    <h2 className="visually-hidden">Последние статьи</h2>
                    {
                      data.allContentfulBlogPost.nodes.map((article) => {
                        return (
                          <BlogPostPreview
                          data = {article}
                        />                          
                        )
                      })
                    }
                </section>

            </div>
        </Layout>
    )
}

export default BlogPage

export const blogPageQuery = graphql`
query blogEnPageQuery {
    allContentfulBlogPost(filter: {node_locale: {eq: "en"}}) {
      nodes {
        title
        heroImage {
          fluid(quality: 100) {
            ...GatsbyContentfulFluid
          }
          description
        }
        description {
          description
        }
        publishDate
        slug
      }
    }
  }
  

`