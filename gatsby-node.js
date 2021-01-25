const Promise = require('bluebird')
const { result } = require('lodash')
const { resolve } = require('path')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  let blogPostRuPromise = new Promise((resolve, reject) => {
      const blogPost = path.resolve('./src/templates/blog-post.ru.js');
      resolve(
          graphql(
              `
              {
                allContentfulBlogPost(filter: {node_locale: {eq: "ru"}}) {
                    edges {
                    node {
                        title
                        slug
                    }
                    }
                }
              }
              `
          ).then(result => {
                if (result.errors) {
                console.log(result.errors)
                reject(result.errors)
            }

            const posts = result.data.allContentfulBlogPost.edges;
            posts.forEach((post, index) => {
                createPage({
                    path: `/blog/${post.node.slug}/`,
                    component: blogPost,
                    context: {
                        slug: post.node.slug
                    },
                })
            })
          })
      )
    })

    let blogPostEnPromise = new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/blog-post.en.js');
        resolve(
            graphql(
                `
                {
                  allContentfulBlogPost(filter: {node_locale: {eq: "en"}}) {
                      edges {
                      node {
                          title
                          slug
                      }
                      }
                  }
                }
                `
            ).then(result => {
                  if (result.errors) {
                  console.log(result.errors)
                  reject(result.errors)
              }
  
              const posts = result.data.allContentfulBlogPost.edges;
              posts.forEach((post, index) => {
                  createPage({
                      path: `/en/blog/${post.node.slug}/`,
                      component: blogPost,
                      context: {
                          slug: post.node.slug
                      },
                  })
              })
            })
        )
      })

      let projectsRuPromise = new Promise((resolve, reject) => {
        const projectTemplate = path.resolve('./src/templates/project.ru.js');
        resolve(
            graphql(
                `
                {
                 allContentfulProject(filter: {node_locale: {eq: "ru"}}) {
                    edges {
                        node {
                        title
                        slug
                        }
                    }
                    }
                }
                `
            ).then(result => {
                  if (result.errors) {
                  console.log(result.errors)
                  reject(result.errors)
              }
  
              const projects = result.data.allContentfulProject.edges;
              projects.forEach((project, index) => {
                  createPage({
                      path: `/projects/${project.node.slug}/`,
                      component: projectTemplate,
                      context: {
                          slug: project.node.slug
                      },
                  })
              })
            })
        )
      })

      let projectsEnPromise = new Promise((resolve, reject) => {
        const projectTemplate = path.resolve('./src/templates/project.en.js');
        resolve(
            graphql(
                `
                {
                 allContentfulProject(filter: {node_locale: {eq: "en"}}) {
                    edges {
                        node {
                        title
                        slug
                        }
                    }
                    }
                }
                `
            ).then(result => {
                  if (result.errors) {
                  console.log(result.errors)
                  reject(result.errors)
              }
  
              const projects = result.data.allContentfulProject.edges;
              projects.forEach((project, index) => {
                  createPage({
                      path: `/en/projects/${project.node.slug}/`,
                      component: projectTemplate,
                      context: {
                          slug: project.node.slug
                      },
                  })
              })
            })
        )
      })







  return blogPostRuPromise, blogPostEnPromise, projectsRuPromise, projectsEnPromise;
}
