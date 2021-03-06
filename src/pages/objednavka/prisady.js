import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Prisady = ({ data }) => (
  <ObjednavkaLayout heading="Prísady">
    <SEO title="Online objednávka Prisady" />

    {data.allGoogleSpreadsheetPrisady.edges.map(({ node }) => (
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
  query Prisady {
    allGoogleSpreadsheetPrisady {
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

export default Prisady
