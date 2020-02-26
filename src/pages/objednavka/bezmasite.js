import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Bezmasite = ({ data }) => (
  <ObjednavkaLayout heading="Bezmäsité jedlá">
    <SEO title="Online objednávka Bezmasite" />

    {data.allGoogleSpreadsheetBezmasite.edges.map(({ node }) => (
      <Products
        name={node.nazov}
        price={node.cena}
        gram={node.gram}
        zlozenie={node.zlozenie}
        id={node.id}
        key={node.id}
      />
    ))}

  </ObjednavkaLayout>
)

export const query = graphql`
  query Bezmasite {
    allGoogleSpreadsheetBezmasite {
      edges {
        node {
          cena
          gram
          nazov
          zlozenie
          id
        }
      }
    }
  }
`

export default Bezmasite
