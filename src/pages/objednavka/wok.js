import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Wok = ({ data }) => (
  <ObjednavkaLayout heading="Rizotá">
    <SEO title="Online objednávka Wok" />

    {data.allGoogleSpreadsheetWok.edges.map(({ node }) => (
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
  query Wok {
    allGoogleSpreadsheetWok {
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

export default Wok
