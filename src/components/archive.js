/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const Archive = () => {
  const data = useStaticQuery(graphql`
    query postListingQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            id
          }
        }
        totalCount
      }
    }
  `)

  return (
    <>
      <aside>
        <h3>Archive</h3>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <ArchiveList>
            <li key={node.id}>
              <Link to={`/posts${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </li>
          </ArchiveList>
        ))}
      </aside>
    </>
  )
}

export default Archive
