import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import { Animated } from "react-animated-css";
import Layout from '../components/Layout/Layout'
import BlogPostPreview from '../components/BlogPostPreview/BlogPostPreview'
import SEO from '../components/SEO'

const BlogPage = ({ data, location }) => {
    // Массив всех проектов
    const allPosts = data.allContentfulBlogPost.nodes
    // State for the list
    const [list, setList] = useState([...allPosts.slice(0, 6)])
    // State to trigger load more
    const [loadMore, setLoadMore] = useState(false)
    
    // State of whether there is more to load
    const [hasMore, setHasMore] = useState(allPosts.length > 6)
  
    // Load more button click
    const handleLoadMore = () => {
      setLoadMore(true)
    }
  
    // Handle loading more articles
    useEffect(() => {
      if (loadMore && hasMore) {
        const currentLength = list.length
        const isMore = currentLength < allPosts.length
        const nextResults = isMore
          ? allPosts.slice(currentLength, currentLength + 6)
          : []
        setList([...list, ...nextResults])
        setLoadMore(false)
      }
    }, [loadMore, hasMore]) //eslint-disable-line
    //Check if there is more
    useEffect(() => {
      const isMore = list.length < allPosts.length
      setHasMore(isMore)
    }, [list]) //eslint-disable-line
  
    const language = 'ru'
    return (
        <Layout location={location} lang={language}>
            <div className="container blog">
              <SEO 
                  lang = {language}
                  title = 'Блог'
              />
              <Animated>
                <h1 className="page--heading animate__animated animate__fadeIn">Блог</h1>
                <p className="intro-text animate__animated animate__fadeIn arsenal">
                    Рассказываем о дизайне интерьеров, колористике и архитектуре. Делимся своим опытом... Рассказываем о дизайне интерьеров, колористике и архитектуре. Делимся личным опытом.
                </p>
                <section className="blog--articles">
                    <h2 className="visually-hidden">Последние статьи</h2>
                    {
                      list.map((article) => {
                        return (
                          <BlogPostPreview
                          key= {article.slug}
                          data = {article}
                        />                          
                        )
                      })
                    }

                </section>
                {hasMore ? (
                  <button className="button button_center" onClick={handleLoadMore}>Загрузить еще</button>
                ) : (
                  <p className="visually-hidden">Больше нет результатов</p>
                )}
            </Animated>
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
          fluid(maxWidth: 700) {
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