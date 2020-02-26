import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Dezerty = ({ data }) => (
  <ObjednavkaLayout heading="Dezerty">
    <SEO title="Online objednávka Dezerty" />

    {data.allGoogleSpreadsheetDezerty.edges.map(({ node }) => (
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
  query Dezerty {
    allGoogleSpreadsheetDezerty {
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

export default Dezerty
