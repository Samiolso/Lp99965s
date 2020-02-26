import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Listok from "../images/menu.svg"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 5rem;
  text-align: center;
  font-weight: 500;

  .activeS{
    color: rgb(250, 105, 50);
  }
  
  @media (max-width: 1000px) {
    position: fixed;
    top: 5rem;
    right: 0;
    width: 100vw;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: black;
    display: ${({ sideOpen }) => (sideOpen ? "flex" : "none")};
    min-height: 100vh;
    text-align: left;
    padding: 2rem;
    padding-bottom: 10rem;
    z-index: 2;
    overflow: auto;
  }

  a {
    padding: 0.5rem 2rem;
    color: black;
    font-size: 1.4rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-transform: uppercase;
    text-align: left;
    
    @media (max-width: 1000px) {
      font-size: 1.6rem;
      text-align: center;
      padding: 1rem 0;
      font-weight: bold;
      letter-spacing: 0.4rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
    }

    &:hover {
      color: rgb(250, 105, 50);
    }
  }

  .listok {
    width: 100%;
    //margin: 0 auto;
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.8rem;
    font-weight: bold;
    padding: 1rem 2rem;
    border-bottom: 2px solid black;

    @media (max-width: 1000px) {
      width: 80%;
      text-align: center;
      font-size: 3rem;
      align-self: center;
      padding: 1rem;
      border-bottom: 2px solid white;
      color: white;
      letter-spacing: 0.5rem;
      font-weight: bold;
    }
  }

  .close {
    position: fixed;
    top: 7rem;
    right: 1.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 3rem;
    height: 3rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;

    &:focus {
      outline: none;
    }

    @media (min-width: 1000px) {
      display: none;
    }

    div {
      width: 3rem;
    height: 0.4rem;
    background: ${({ sideOpen }) => (sideOpen ? "white" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ sideOpen }) =>
    sideOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ sideOpen }) => (sideOpen ? "0" : "1")};
      transform: ${({ sideOpen }) =>
    sideOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ sideOpen }) =>
    sideOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

export const ListokNav = ({ sideOpen, setSideOpen }) => {
  return (
    <StyledMenu sideOpen={sideOpen}>
      <div className="close" onClick={() => setSideOpen(!sideOpen)}>
        <div />
        <div />
        <div />
      </div>
      <div className="listok">Lístok</div>
      <Link to="/objednavka/pizza" activeClassName="activeS">Pizza</Link>
      <Link to="/objednavka/prisady" activeClassName="activeS">Prísady na pizzu</Link>
      <Link to="/objednavka/polievky" activeClassName="activeS">Polievky</Link>
      <Link to="/objednavka/predjedla" activeClassName="activeS">Predjedlá</Link>
      <Link to="/objednavka/burger" activeClassName="activeS">Burger</Link>
      <Link to="/objednavka/kuracie" activeClassName="activeS">Kuracie mäso</Link>
      <Link to="/objednavka/bravcove" activeClassName="activeS">Bravčové mäso</Link>
      <Link to="/objednavka/hovadzie" activeClassName="activeS">Hovädzie mäso</Link>
      <Link to="/objednavka/bezmasite" activeClassName="activeS">Bezmäsité</Link>
      <Link to="/objednavka/cestoviny" activeClassName="activeS">Cestoviny</Link>
      <Link to="/objednavka/salaty" activeClassName="activeS">Šaláty</Link>
      <Link to="/objednavka/rizota" activeClassName="activeS">Rizotá</Link>
      <Link to="/objednavka/speciality" activeClassName="activeS">Špeciality</Link>
      <Link to="/objednavka/dezerty" activeClassName="activeS">Dezerty</Link>
      <Link to="/objednavka/prilohy" activeClassName="activeS">Prílohy</Link>
      <Link to="/objednavka/dressingy" activeClassName="activeS">Dressingy</Link>
      <Link to="/objednavka/napoje" activeClassName="activeS">Nápoje</Link>
    </StyledMenu>
  )
}


const StyledBurger = styled.button`
  position: absolute;
  top: 0rem;
  left: 0rem;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
 
  &:focus {
    outline: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }

  .listok {
    color: white;
    font-size: 1.8rem;
    padding-left: 1rem;
    margin-top: 0.2rem;
  }
`

export const ListokNavBurger = ({ sideOpen, setSideOpen }) => {
  return (
    <StyledBurger sideOpen={sideOpen} onClick={() => setSideOpen(!sideOpen)}>
      <img className="listok-svg" src={Listok} alt="" />
      <div className="listok">Lístok</div>
    </StyledBurger>
  )
}