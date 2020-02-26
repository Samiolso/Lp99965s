import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Prilohy = ({ data }) => (
  <ObjednavkaLayout heading="Prílohy">
    <SEO title="Online objednávka Prilohy" />

    {data.allGoogleSpreadsheetPrilohy.edges.map(({ node }) => (
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
  query Prilohy {
    allGoogleSpreadsheetPrilohy {
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

export default Prilohy
