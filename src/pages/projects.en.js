import React, { useState, useEffect } from "react"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Animated } from "react-animated-css";
import SEO from '../components/SEO'

import Layout from '../components/Layout/Layout'
import ProjectPreview from '../components/ProjectPreview/ProjectPreview'

import '../styles/pages/projects.scss'

const ProjectsPage = ({ data, location }) => {

  // Массив всех проектов
  const allProjects = data.projectData.nodes
  // State for the list
  const [list, setList] = useState([...allProjects.slice(0, 1)])
  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)
  
  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(allProjects.length > 1)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allProjects.length
      const nextResults = isMore
        ? allProjects.slice(currentLength, currentLength + 1)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line
  //Check if there is more
  useEffect(() => {
    const isMore = list.length < allProjects.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  const language = 'en';
  return (
    <Layout location={location} lang={language}>
      <SEO 
                lang = {language}
                title = 'Projects'
            />
      <section className="container">
        <Animated>
          <h1 className="page--heading" >Projects</h1> 
        </Animated>
        <div className="projects-list">
          {
            list.map((project) => {
              return (
                <ProjectPreview
                key = {project.slug}
                lang = {language}
                project = {project}
              />
              )
            })
          }
        </div>
        {hasMore ? (
        <button className="button button_center" onClick={handleLoadMore}>Load more</button>
      ) : (
        <p className="visually-hidden">No more results</p>
      )}
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query projectsenPageQuery {
    projectData: allContentfulProject(filter: {node_locale: {eq: "en"}}) {
      nodes {
        title
        slug
        area
        year
        city
        explication
        shortDescription {
          childMarkdownRemark {
            html
          }
        }
        scheme {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
        previewImage {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
    
  }
`

