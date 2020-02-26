import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Predjedla = ({ data }) => (
  <ObjednavkaLayout heading="Predjedlá">
    <SEO title="Online objednávka Predjedla" />

    {data.allGoogleSpreadsheetPredjedla.edges.map(({ node }) => (
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
  query Predjedla {
    allGoogleSpreadsheetPredjedla {
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

export default Predjedla
