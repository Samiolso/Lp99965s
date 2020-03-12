import React from "react"
import { Link, graphql } from 'gatsby'

import ObjednavkaLayout from "../../components/ObjednavkaLayout"
import { Products } from "../../components/Products"
import SEO from "../../components/seo"


const Obed = ({ data }) => {
  const hours = new Date().getHours()

  const obedHours = (hours >= 10 && hours <= 13)

  return (
    <ObjednavkaLayout heading="Objednávajte do 14:00">
      <SEO title="Online objednávka Obedové menu" />

      {obedHours ?
        <div>
          {
            data.allGoogleSpreadsheetObed.edges.map(({ node }) => (
              <Products
                name={node.nazov}
                price={node.cena}
                gram={node.gram}
                zlozenie={node.zlozenie}
                id={node.id}
                key={node.id}
              />
            ))
          }</div> :
        <div style={{ textAlign: "center", fontSize: "1.8rem", paddingTop: "2rem" }}>
          Je nám ľúto už je po 14:00.
        </div>}


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
}

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
