import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Napoje = ({ data }) => (
  <ObjednavkaLayout heading="Nápoje">
    <SEO title="Online objednávka Napoje" />

    {data.allGoogleSpreadsheetNapoje.edges.map(({ node }) => (
      <Products
        name={node.nazov}
        price={node.cena}
        gram={node.gram}
        //zlozenie={node.zlozenie}
        id={node.id}
        key={node.id}
      />
    ))}

  </ObjednavkaLayout>
)

export const query = graphql`
  query Napoje {
    allGoogleSpreadsheetNapoje {
      edges {
        node {
          cena
          gram
          nazov
          id
        }
      }
    }
  }
`

export default Napoje
