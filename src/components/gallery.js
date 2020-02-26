import React from "react"
import Gallery from "react-grid-gallery"
import { StaticQuery, graphql } from "gatsby"

function myThumbnailStyle() {
  return ({})
}

export default () => (
  <StaticQuery
    query={graphql`
      query Gallery {
        allGoogleSpreadsheetObrazky {
          edges {
            node {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Gallery
          images={data.allGoogleSpreadsheetObrazky.edges.map(({ node }) => ({
            src: node.url,
            thumbnail: node.url,
            thumbnailWidth: 250,
            thumbnailHeight: 170,
            caption: "Pizzeria Lucky",
          }))}
          enableLightbox={true}
          backdropClosesModal
          enableImageSelection={false}
          rowHeight={170}
          margin={3}
          //showLightboxThumbnails={true}
          thumbnailStyle={myThumbnailStyle}
        />
      </div>
    )}
  />
)


