import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import "./index.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo-bigS.png"
import "typeface-raleway-dots"
import { Hodiny } from "../components/hodiny"

import BurgerImg from "../images/burger.jpg"
import PizzaImg from "../images/pizza.jpg"
import TatarakImg from "../images/tatarak.jpg"
import ArrowRight from "../images/arrow-right.svg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Pizzeria Lucky" />
    <div>
      <div className="head">
        <img src={Logo} alt="logo" style={{ maxHeight: "55vh" }} />
        <div className="hodiny-index">
          <Hodiny val={data.allGoogleSpreadsheetOhodiny.edges.map(({ node }) => (
            node.ohodiny
          ))} />
        </div>

        <div className="header-text">
          <div className="text text1">Objednajte telefonicky na</div>
          <div className="text text2">0950 309 099</div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="text">alebo</div>
          <Link to="/objednavka/pizza">
            <button name="online objednávka" className="btn">ONLINE</button>
          </Link>
        </div>
      </div>

      <div className="container1">
        <div className="akcie">
          <div className="akcia">Od 15:00 do 18:00 pizza za 4€</div>
          <div className="akcia">Nad 20€ dva litre nealka zdarma</div>
          <div className="akcia">Petržalka a Jarovce zdarma</div>
          <div className="akcia">3 + 1 PIZZA zdarma</div>
        </div>
        <div className="akcia-text">Akcie</div>
      </div>

      <div className="box-container">
        <div className="box-all">
          <div className="box box__1">
            <img src={BurgerImg} alt="" /></div>
          <div className="box box__2">
            <img src={PizzaImg} alt="" /></div>
          <div className="box box__3">
            <img src={TatarakImg} alt="" /></div>

          <Link to="/objednavka/pizza">
            <div className="box box__4">
              <div className="box-menu">Menu</div>
              <div className="box-arrow">
                <img src={ArrowRight} alt="" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query Hodinky {
    allGoogleSpreadsheetOhodiny {
      edges {
        node {
          ohodiny
        }
      }
    }
  }
`

export default IndexPage
