import React, { useContext } from "react"
import { CartContext } from "./CartContext"

import "./Products.scss"
import Basket from "../images/cart.svg"

export const Products = props => {
  const [cart, setCart] = useContext(CartContext)

  const addToCart = () => {
    const itemInCart = cart.find(item => item.id === props.id)
    const item = {
      name: props.name,
      price: props.price,
      id: props.id,
      count: 1,
    }

    if (itemInCart) {
      cart.map(item => {
        if (item.id === props.id) {
          item.count += 1
          setCart([...cart])
        }
        if (item.name === "LUCKY" || item.name === "Menu B") {
          //alert("Nezabudnite si pridať prílohy.")
          window.location = "/objednavka/prisady"
        }

        if (item.name === "Pizza Štangle" || item.name === "Pizza Štangle plnené") {
          //alert("Nezabudnite si pridať dressing.")
          window.location = "/objednavka/dressingy"
        }

      })
    } else {
      setCart(curr => [...curr, item])
      if (item.name === "LUCKY" || item.name === "Menu B") {
        //alert("Nezabudnite si pridať prílohy.")
        window.location = "/objednavka/prisady"
      }

      if (item.name === "Pizza Štangle" || item.name === "Pizza Štangle plnené") {
        //alert("Nezabudnite si pridať dressing.")
        window.location = "/objednavka/dressingy"
      }
    }
  }


  const price = Number(props.price).toFixed(2)

  return (
    <div className="product-container">
      <div>
        <div className="section1">
          <h5 style={{ transform: "translateY(0.4rem)" }}>{props.gram}</h5>
          <h3 style={{ paddingLeft: "0.5rem" }}>{props.name}</h3>

        </div>
        <div className="zlozenie" >{props.zlozenie}</div>
      </div>

      <div className="section2">
        <p style={{ paddingRight: "0.5rem" }}>{price}€</p>

        <div className="button">
          <button className="addButton" onClick={addToCart}>
            <img className="basket" src={Basket} alt="basket" />
          </button>

          <div className="number">{
            cart.length > 0 && (
              cart.map(item => {
                if (item.id === props.id) {
                  return <div style={{ padding: "0.2rem 0" }}>{item.count}</div>
                }
              }))}</div>
        </div>
      </div>
    </div>
  )
}
