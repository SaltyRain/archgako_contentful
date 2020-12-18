import React from 'react'
import get from 'lodash/get'
import './about.scss';

class AboutIndex extends React.Component {
    render() {
        const blockTitle = get(this, 'props.data.allContentfulAboutStudio.edges.node.title')
        const shortAbout = get(this, 'props.data.allContentfulAboutStudio.edges.node.shortAbout.shortAbout')

        const siteTitle = get(this, 'props.data.site.siteMetadata.title')
        const posts = get(this, 'props.data.allContentfulBlogPost.edges')
        console.log(posts)
        console.log(shortAbout)
        return (
            <section className="about container">
                <div className="about--photo-wrapper">
                    <h2 className="about--title">{blockTitle}</h2>
                </div>

                <div className="about--desc">
                    <div className="about--text-wrapper">
                        {/* {this.props.allContentfulAboutStudio.edges.node.shortAbout.shortAbout} */}
                    </div>
                    <span className="about--est">est. 2017</span>
                </div>
            </section>
        )
    }
}


export default AboutIndex

export const aboutQuery = graphql`
    query aboutIndexQuery {
        allContentfulAboutStudio {
            edges {
              node {
                title
                shortAbout {
                  shortAbout
                }
              }
            }
          }
    }
  
`
