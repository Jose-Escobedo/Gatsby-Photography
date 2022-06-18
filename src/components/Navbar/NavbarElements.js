import styled from "styled-components"
import { DiScala } from "react-icons/di"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#FFF"
      : "linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#FFF" : "transparent")};
    transition: all 0.8s ease;
  }
`

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`
export const NavLogo = styled(Link)`
  color: #141414;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`

export const NavIcon = styled(DiScala)`
  margin: 0 0.5em 0 2em;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
  }
`

export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #141414;
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 0.5em 1em;
  height: 100%;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2em;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
