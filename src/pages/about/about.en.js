import React from 'react';


class AboutPage extends React.Component {
    render() {
      const usProductEdges = this.props.data.us.edges
      return (
        <Layout data={this.props.data} location={this.props.location}>
          <div style={{ marginBottom: rhythm(2) }}>
            <h3>en-US</h3>
            {usProductEdges.map(({ node }, i) => (
              <Product node={node} key={node.id} />
            ))}
          </div>
        </Layout>
      )
    }
  }
  
  export default AboutPage
