import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "typeface-raleway"
import "./objednavka_layout.scss"
import { ListokNav, ListokNavBurger } from "./listokNav"
import Layout from "./layout"
import { CartProvider } from "./CartContext"
import { Cart } from "./Cart"

import ShoppingCart from "../images/shopping-cart.svg"
import Order from "../images/clipboards.svg"
import ArrowRight from "../images/arrow-right.svg"
import Penazenka from "../images/penazenka.svg"

const Objednavka_Layout = ({ children, heading }) => {
  const [sideOpen, setSideOpen] = useState(false)

  return (
    <>
      <Layout>
        <div className="header">
          <div className="header__text">Online objednávka</div>
        </div>

        <div className="navod">
          <div className="cast1">
            <img src={Order} alt="" />
            <div className="vybrat">Vyberte si jedlo</div>
            <img src={ArrowRight} alt="" />
            <img src={ShoppingCart} alt="" />

            <div className="pridat">Pridajte do košíka a objednajte</div>
          </div>

          <div className="cast1">
            <img src={Penazenka} alt="" />
            <div className="zaplatit">Zaplatíte v hotovosti pri prevzatí</div>
          </div>
        </div>

        <CartProvider>
          <div className="content">
            <div className="ListokNav">
              <ListokNavBurger sideOpen={sideOpen} setSideOpen={setSideOpen} />
              <ListokNav sideOpen={sideOpen} setSideOpen={setSideOpen} />
            </div>

            <div className="obj-container">
              <div className="obj-header">
                <div className="obj-header__heading">{heading}</div>
                <div className="obj-header__menu">
                  <Link to="/objednavka/obed">Obedové menu</Link>
                </div>
              </div>
              <div className="obj-content">{children}</div>
            </div>

            <div className="cart">
              <Cart />
            </div>
          </div>
        </CartProvider>
      </Layout>
    </>
  )
}

Objednavka_Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Objednavka_Layout
