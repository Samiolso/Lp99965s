import React, { useContext, useState } from "react"
import { graphql } from 'gatsby'

import { CartContext } from "./CartContext"
import { Modal } from "./Modal"
import { Alert } from "./alert"
import Supermarket from "../images/supermarket.svg"
import CartAdded from "../images/cartAdded.svg"

import "./Cart.scss"

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext)
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  const [dovoz, setDovoz] = useState("Dovoz")
  const [cast, setCast] = useState("Petržalka/Jarovce")
  const [meno, setMeno] = useState("")
  const [ulica, setUlica] = useState("")
  const [cislo, setCislo] = useState("")
  const [email, setEmail] = useState("")
  const [poznamky, setPoznamky] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const price = cart.reduce((acc, curr) => acc + curr.price * curr.count, 0)
  const totalPrice = price.toFixed(2)

  const priceIne = cart.reduce((acc, curr) => acc + curr.price * curr.count, 2)
  const totalPriceIne = priceIne.toFixed(2)

  const fixedPrice = (p, c) => {
    const sumar = (p * c).toFixed(2)
    return sumar
  }

  const remove = idx => {
    const temp = [...cart]
    temp.splice(idx, 1)
    setCart(temp)
  }

  const area = cart.map(items => `${items.count}x ${items.name}`)
  const textArea = area.join(", ").toString()

  const removeLocal = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart")
      window.location = "/dakujeme"
    }
  }

  const openModal = () => {
    if (textArea === "") {
      setDisplay(true)

    } else {
      setShow(true)
    }
  }

  return (
    <div className="cart-container">
      <div className="kosik">
        <div className="cart-header">
          Košík
      </div>

        <div className="cart-items">
          {cart.length > 0 ?
            cart.map((items, idx) => (
              <div className="cart-item"
                key={idx}
              >
                <div className="part1">
                  <div className="plus-minus">
                    <button className="minus"
                      onClick={() => {
                        items.count--
                        setCart([...cart])
                        if (items.count < 1) {
                          remove(idx)
                        }
                      }}
                    >
                      -
                </button>
                    {items.count}
                    <button className="plus"
                      onClick={() => {
                        items.count++
                        setCart([...cart])
                      }}
                    >
                      +
            </button>
                  </div>

                  <div className="item">
                    {items.name}
                  </div>
                </div>

                <div style={{ display: "flex", fontSize: "1.4rem" }}>
                  <div>
                    {fixedPrice(items.price, items.count)} €
              </div>
                  <button className="remove" onClick={() => remove(idx)}>X</button>
                </div>
              </div>
            )) : "Váš košík je prázdny"}
        </div>
        <br />
        <br />
        <div className="bottom">
          <div className="price">Cena spolu: {totalPrice} € </div>
          <button className="objednat" onClick={openModal}>Objednať</button>
        </div>
      </div>

      <button onClick={openModal} className="kosik-btn">
        {cart.length > 0 ? <img src={CartAdded} alt="košík" /> : <img src={Supermarket} alt="košík" />}
        <div className="kosik-btn__text">Košík</div>
        {cart.length > 0 && (
          <div className="kosik-btn__number">{cart.length}</div>
        )}
      </button>

      <Modal show={show} setShow={setShow}>
        <div className="wrapper">

          <div className="modal-header">Objednávka</div>
          <br />

          <div className="cart-items__modal">
            {cart.length > 0 ?
              cart.map((items, idx) => (
                <div className="cart-item"
                  key={idx}
                >
                  <div className="part1">
                    <div className="plus-minus">
                      <button className="minus"
                        onClick={() => {
                          items.count--
                          setCart([...cart])
                          if (items.count < 1) {
                            remove(idx)
                          }
                        }}
                      >
                        -
                    </button>
                      {items.count}
                      <button className="plus"
                        onClick={() => {
                          items.count++
                          setCart([...cart])
                        }}
                      >
                        +
                    </button>
                    </div>

                    <div className="item">
                      {items.name}
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <div>
                      {fixedPrice(items.price, items.count)} €
                     </div>
                    <button className="remove" onClick={() => remove(idx)}>X</button>
                  </div>
                </div>
              )) : "Váš košík je prázdny"}
          </div>
          <iframe
            title="form"
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: "none" }}
            onLoad={submitted && (removeLocal)}
          ></iframe>
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdO-CtC90QfsZ0WuaUg8VcIGI69B-zHIvyM3gY-jtdl0vbblA/formResponse"
            method="POST"
            target="hidden_iframe"
            id="myForm"
            onSubmit={() => setSubmitted(true)}
          >
            <br />

            <div className="meno-priezvisko">
              <div className="meno">
                <div className="input-header">Meno a priezvisko*</div>
                <input className="input input__meno" name="entry.232782056" type="text" id="meno"
                  value={meno}
                  onChange={(e) => { setMeno(e.target.value) }}
                  required />
              </div>

            </div>

            <div className="input-flex">
              <div className="input-header">Ulica*</div>
              <input className="input" name="entry.1916136477" type="text" id="ulica"
                value={ulica}
                onChange={(e) => { setUlica(e.target.value) }}
                required />
            </div>


            <div className="input-flex">
              <div className="input-header">Mesto</div>
              <input className="input" name="mesto" type="text" id="ulica" value="Bratislava" readonly />
            </div>

            <div>
              <div className="input-header">Mestská časť</div>
              <div className="donaska">
                <div className="input-wrap">
                  <input
                    type="radio"
                    name="cast"
                    id="MC"
                    value="Dovoz"
                    checked={cast === "Petržalka/Jarovce"}
                    onClick={() => {
                      setCast("Petržalka/Jarovce")
                    }}
                  />
                  <label for="MC">Petržalka/Jarovce</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="radio"
                    name="cast"
                    id="Ine"
                    value="Osobný odber"
                    checked={cast === "Iné (+2€)"}
                    onClick={() => {
                      setCast("Iné (+2€)")
                    }}

                  />
                  <label for="Ine">Iné (+2€)</label>
                </div>
              </div>
            </div>

            <div className="input-flex">
              <div className="input-header">Tel. číslo*</div>
              <input className="input" name="entry.1095963017" type="text" id="cislo"
                value={cislo}
                onChange={(e) => { setCislo(e.target.value) }}
                required />
            </div>

            <div className="input-flex">
              <div className="input-header">Email*</div>
              <input className="input" name="entry.302016231" type="email" id="cislo"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
                required />
            </div>

            <hr />

            <div>
              <div className="input-header">Spôsob doručenia</div>
              <div className="donaska">
                <div className="input-wrap">
                  <input
                    type="radio"
                    name="entry.983427444"
                    id="e4"
                    value="Dovoz"
                    checked={dovoz === "Dovoz"}
                    onClick={() => {
                      setDovoz("Dovoz")
                    }}
                  />
                  <label for="e4">Dovoz</label>
                </div>

                <div className="input-wrap">
                  <input
                    type="radio"
                    name="entry.983427444"
                    id="e3"
                    value="Osobný odber"
                    checked={dovoz === "Osobný odber"}
                    onClick={() => {
                      setDovoz("Osobný odber")
                    }}

                  />
                  <label for="e3">Osobný odber</label>
                </div>
              </div>
            </div>
            <hr />

            <div>
              <div className="input-header">Platba</div>
              <div className="input-wrap" style={{ paddingBottom: "1rem" }}>
                <input
                  type="radio"
                  name="ht"
                  id="e5"
                  value="Hotovost"
                  checked={true}
                />
                <label for="e5" >Hotovosť</label>
              </div>
            </div>

            <hr />

            <div>
              <div className="input-header">Poznámky k objednávke</div>
              <textarea className="input"
                style={{ width: "100%", outline: "none", color: "black", padding: "1rem" }}
                rows="4"
                className="area"
                name="entry.610070434"
                id="Hi"
                placeholder="Čas doručenia, poschodie..."
                value={poznamky}
                onChange={(e) => { setPoznamky(e.target.value) }}
              />
            </div>

            <div style={{ display: "none" }}>
              <label for="explain">Objednávka</label>
              <textarea
                style={{ width: "100%", outline: "none", color: "red" }}
                rows="10"
                className="area"
                name="entry.616857112"
                id="explain"
                value={textArea}
                required
              />
            </div>

            <div className="modal-footer">
              <input
                /* onClick={() => {
                  if (textArea === "") {
                    alert("Košík je prázdny ")
                  }
                }} */
                className="modal-footer__button"
                type="submit"
                value="Objednať"
              />

              <div style={{ padding: "2rem" }}>{cast === "Iné (+2€)" ? `Cena spolu: ${totalPriceIne} €` : ` Cena spolu: ${totalPrice} €`} </div>

            </div>
          </form>
        </div>
      </Modal>

      <Alert display={display} setDisplay={setDisplay}>
        <div style={{ color: "red" }}>Košík je prázdny</div>
      </Alert>

    </div >
  )
}
