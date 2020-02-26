import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Kuracie = ({ data }) => (
  <ObjednavkaLayout heading="Kuracie mäso">
    <SEO title="Online objednávka Kuracie" />

    {data.allGoogleSpreadsheetKuracie.edges.map(({ node }) => (
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
  query Kuracie {
    allGoogleSpreadsheetKuracie {
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

export default Kuracie
