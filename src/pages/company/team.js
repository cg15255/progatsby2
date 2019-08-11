import React from "react"
import Layout from "../../components/layout"
import { StaticQuery, graphql } from "gatsby"

const SITE_METADATA_QUERY = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const Team = () => (
  <StaticQuery
    query={SITE_METADATA_QUERY}
    render={data => (
      <Layout>
        <div>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
        </div>
      </Layout>
    )}
  />
)

export default Team
