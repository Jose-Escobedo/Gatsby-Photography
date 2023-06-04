import styled from "styled-components"

export const HeroContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  margin-top: -80px;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`

export const HeroH1 = styled.h1`
  color: black;
  font-size: 2rem;
  margin-top: 0px;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`

export const HeroP = styled.p`
  margin-top: 0;
  color: black;
  font-size: 1rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`

export const HeroButton = styled.button`
  border-radius: 4px;
  background: linear-gradient(#010106, #2e344e) padding-box;
  white-space: nowrap;
  padding: 0.5em 0.8em;
  color: #fff;
  font-size: 1.5rem;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.5s ease-out;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.2rem;
  }
`
