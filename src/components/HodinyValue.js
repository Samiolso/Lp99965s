import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Alert } from "./alert"

export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        allGoogleSpreadsheetOhodiny {
          edges {
            node {
              ohodiny
            }
          }
        }
      }
    `}

    render={(data) =>
      (
        data.allGoogleSpreadsheetOhodiny.edges.map(({ node }) => (node.ohodiny !== 1 &&
          <Alert />
        )
        ))
    }
  />
)