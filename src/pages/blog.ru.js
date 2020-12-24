import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/Layout'
import BlogPostPreview from '../components/BlogPostPreview/BlogPostPreview'

const BlogPage = ({ data, location }) => {
  console.log(data.allContentfulBlogPost.nodes, 'KIZARU ')
    return (
        <Layout location={location} lang="ru">
            <div className="container blog">
                <h1 className="page--heading animate__animated animate__fadeIn">Блог</h1>
                <p className="intro-text animate__animated animate__fadeIn">
                    Рассказываем о дизайне интерьеров, колористике и архитектуре. Делимся своим опытом... Рассказываем о дизайне интерьеров, колористике и архитектуре. Делимся личным опытом.
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
                    {/* <BlogPostPreview
                      data = {data.allContentfulBlogPost.edges[0].node}
                    /> */}
                </section>

            </div>
        </Layout>
    )
}

export default BlogPage

export const blogPageQuery = graphql`
query blogRuPageQuery {
    allContentfulBlogPost(filter: {node_locale: {eq: "ru"}}) {
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