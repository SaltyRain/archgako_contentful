import React from 'react'
import Layout from '../components/layout/layout'
import '../styles/templates/blog-post.scss'

function BlogPostTemplate({ location, data }) {
    return (
        <Layout location={location} lang="ru">
            <article className="blog-post">
                <h1 className="page--heading">Heading</h1>
                <p className="blog-post--r-time">
                    Время прочтения:
                    <span className="brown">{data.contentfulBlogPost.readingTime} минут</span>
                </p>
                <div
                className='blog-post--content'
                dangerouslySetInnerHTML={{
                    __html: data.contentfulBlogPost.body.childMarkdownRemark.html,
                }}
                />
            </article>
        </Layout>

    )
}

export default BlogPostTemplate


export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }, node_locale: {eq: "ru"}) {
      title
      readingTime
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
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