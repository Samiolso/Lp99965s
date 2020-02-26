import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Bravcove = ({ data }) => (
  <ObjednavkaLayout heading="Bravčové mäso">
    <SEO title="Online objednávka Bravcove" />

    {data.allGoogleSpreadsheetBravcove.edges.map(({ node }) => (
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
  query Bravcove {
    allGoogleSpreadsheetBravcove {
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

export default Bravcove
