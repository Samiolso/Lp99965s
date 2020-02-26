import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Dressingy = ({ data }) => (
  <ObjednavkaLayout heading="Dressingy">
    <SEO title="Online objednávka Dressingy" />

    {data.allGoogleSpreadsheetDressingy.edges.map(({ node }) => (
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
  query Dressingy {
    allGoogleSpreadsheetDressingy {
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

export default Dressingy
