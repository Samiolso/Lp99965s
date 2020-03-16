import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  graphql
} from 'gatsby'

import "./menu.scss"

const Menu = ({
  data
}) => ( <
  Layout >
  <
  SEO title = "Obedové menu" / >
  <
  div className = "menu-header" > Obedové menu < /div> <
  div className = "menu-container" > {
    data.allGoogleSpreadsheetMenu.edges.map(({
      node
    }) => ( <
      div >
      <
      div className = "datum-container"
      style = {
        {
          textAlign: "center",
          padding: "1rem",
          fontSize: "1.7rem",
          color: "white"
        }
      } > < strong >
      <
      span className = "den" > {
        node.den
      } < /span> <
      span className = "datum" > {
        node.datum
      } < /span> </strong >
      <
      /div>

      <
      div className = "menu-items" >
      <
      div className = "menu-item" > < strong > Polievka: < /strong> {node.polievka}</div >
      <
      div className = "menu-item" > < strong > Menu 1:
      <
      br / >
      <
      /strong> {node.menu1}</div >
      <
      div className = "menu-item" > < strong > Menu 2:
      <
      br / >
      <
      /strong> {node.menu2}</div >
      <
      div className = "menu-item" > {
        node.menu3 !== "-" &&
        <
        div >
        <
        strong > Menu 3:
          <
          br / >
          <
          /strong> {node.menu3} <
          /div>
      } <
      /div> <
      div className = "menu-item" > < strong > Menu A:
      <
      br / >
      <
      /strong> {node.menuA}</div >
      <
      div className = "menu-item" > < strong > Menu B:
      <
      br / >
      <
      /strong> {node.menuB}</div >

      <
      /div> <
      /div>
    ))
  } <
  /div> <
  /Layout>
)

export const query = graphql `
  query Menu {
    allGoogleSpreadsheetMenu {
      edges {
        node {
        datum(formatString: "D.M")
        den
        menu1
        menu2
        menu3
        menuA
        menuB
        polievka
        }
      }
    }
  }
`

export default Menu