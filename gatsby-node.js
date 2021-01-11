const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const ruBlogPost = path.resolve('./src/templates/blog-post.ru.js')
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

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: ruBlogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}
