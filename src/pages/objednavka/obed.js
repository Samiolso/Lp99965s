import React from "react"
import { Link, graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Obed = ({ data }) => (
  <ObjednavkaLayout heading="Objednávajte do 13:00">
    <SEO title="Online objednávka Obedové menu" />

    {data.allGoogleSpreadsheetObed.edges.map(({ node }) => (
      <Products
        name={node.nazov}
        price={node.cena}
        gram={node.gram}
        zlozenie={node.zlozenie}
        id={node.id}
        key={node.id}
      />
    ))}

    <div className="tyzden" style={{
      display: " flex",
      justifyContent: "center",
      paddingTop: "2rem"
    }}>
      <Link to="/menu" style={{
        fontSize: "1.4rem",
        color: "black",
        textDecoration: "underline"
      }}>Zobraziť celý týždeň</Link>
    </div>

  </ObjednavkaLayout>
)

export const query = graphql`
  query Obed {
    allGoogleSpreadsheetObed {
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

export default Obed
