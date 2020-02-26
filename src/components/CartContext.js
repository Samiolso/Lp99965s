import React, { useState, useEffect } from "react"

export const CartContext = React.createContext()
export const CartProvider = props => {
  const localState = () => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart")) || []
    } else {
      return []
    }
  }

  //typeof window !== "undefined"
  const [cart, setCart] = useState(localState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  )
}