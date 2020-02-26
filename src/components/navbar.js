import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledMenu = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 5rem;
  text-align: center;
  font-weight: 500;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: black;
    display: ${({ open }) => (open ? "flex" : "none")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 5rem;
    right: 0;
    transition: visibility 0.2s ease-in-out;
    padding-top: 10rem;
    overflow:auto;
  }

  a {
    padding: 0 4rem;
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
    transition: color 0.3s linear;
    text-transform: uppercase;

    @media (max-width: 1000px) {
      font-size: 1.8rem;
      text-align: center;
      padding: 2rem 0;
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

  .active{
    color: rgb(250, 105, 50);
  }

  .menu{
    width: 80%;
      text-align: center;
      font-size: 3rem;
      align-self: center;
      padding: 1rem;
      margin-bottom: 2rem;
      border-bottom: 2px solid white;
      color: white;
      letter-spacing: 0.5rem;
      font-weight: bold;

      @media (min-width: 1000px) {
        display: none;
      }
  }
`

export const Navbar = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <div className="menu">Menu</div>
      <Link to="objednavka/pizza" activeClassName="active">ONLINE OBJEDNÁVKA</Link>
      <Link to="/menu" activeClassName="active">OBEDOVÉ MENU</Link>
      <Link to="/listok" activeClassName="active">JEDÁLNY LÍSTOK</Link>
      <Link to="/galeria" activeClassName="active">GALÉRIA</Link>
      <Link to="/kontakt" activeClassName="active">KONTAKT</Link>
    </StyledMenu>
  )
}

const StyledBurger = styled.button`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  @media (min-width: 1000px) {
    display: none;
  }

  div {
    width: 3rem;
    height: 0.4rem;
    background: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

