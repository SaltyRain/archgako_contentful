import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'
import get from 'lodash/get'

import Layout from '../components/Layout/Layout'
import ProjectPreview from '../components/ProjectPreview/ProjectPreview'

import '../styles/pages/projects.scss'

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} lang="ru">
      <section className="container">
        <h1 className="page--heading animate__animated animate__fadeIn" >Проекты</h1> 
        <div className="projects-list">
          {
            data.projectData.edges.map(({ node }) => {
              return (
                <ProjectPreview
                lang = 'ru'
                project = {node}
              />
              )
            })
          }
        </div>
      </section>
    </Layout>
  )
}

export default ProjectsPage

export const projectsPageQuery = graphql`
  query projectsRuPageQuery {
    projectData: allContentfulProject(filter: {node_locale: {eq: "ru"}}) {
      edges {
        node {
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
            fluid(maxWidth: 1200) {
              ...GatsbyContentfulFluid
            }
          }
          previewImage {
            fluid(quality: 100) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    
  }
`