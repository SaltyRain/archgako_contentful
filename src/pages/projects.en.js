import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Img from 'gatsby-image'

import Layout from '../components/Layout/Layout'
import ProjectPreview from '../components/ProjectPreview/ProjectPreview'

import '../styles/pages/projects.scss'

const ProjectsPage = ({ data, location }) => {
  return (
    <Layout location={location} lang="en">
      <section className="container">
        <h1 className="page--heading animate__animated animate__fadeIn" >Projects</h1> 
        <div className="projects-list">
          {
            data.projectData.edges.map(({ node }) => {
              return (
                <ProjectPreview
                lang = 'en'
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
  query projectsEnPageQuery {
    projectData: allContentfulProject(filter: {node_locale: {eq: "en"}}) {
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