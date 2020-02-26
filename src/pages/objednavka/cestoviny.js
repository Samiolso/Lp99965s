import React from "react"
import { graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Cestoviny = ({ data }) => (
  <ObjednavkaLayout heading="Cestoviny">
    <SEO title="Online objednávka Cestoviny (Penne, spaghetti)" />

    {data.allGoogleSpreadsheetCestoviny.edges.map(({ node }) => (
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
  query Cestoviny {
    allGoogleSpreadsheetCestoviny {
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

export default Cestoviny
