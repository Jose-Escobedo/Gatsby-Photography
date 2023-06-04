import styled from "styled-components"
import "@fontsource/montserrat/200.css"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat"

export const GalleryImageContainer = styled.div`
  text-align: center;
  margin-bottom: 150px;

  h1 {
    color: black;
    font-size: 7rem;
    padding: 0.5em 0.5em;
    font-family: "Montserrat", sans-serif;
    font-weight: 200;
    @media screen and (max-width: 560px) {
      font-size: 4rem;
      padding: 20px;
    }
    @media screen and (max-width: 400px) {
      font-size: 3rem;
      padding: 20px;
    }
  }
  h2 {
    margin-top: 3em;
    margin-bottom: 3em;
    font-size: 2.5rem;
    font-weight: 500;

    font-family: "Montserrat", sans-serif;
    @media screen and (max-width: 560px) {
      font-size: 2rem;
      padding: 20px;
    }
    @media screen and (max-width: 400px) {
      font-size: 1rem;
      padding: 20px;
    }
  }
`
export const LandscapeImageGrid = styled.div`
  display: grid;
  grid-gap: 0.8em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 2em;
  width: 100%;

  .image-item:nth-child(5) {
    grid-column-end: span 2;
  }
  .image-item:nth-child(10) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  .image-item img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`

export const CarsImageGrid = styled.div`
  display: grid;
  grid-gap: 0.8em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 2em;
  width: 100%;

  .image-item:nth-child(4) {
    grid-column-end: span 2;
  }
  .image-item:nth-child(10) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  .image-item img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`

export const FoodImageGrid = styled.div`
  display: grid;
  grid-gap: 0.8em;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
  width: 100%;

  .image-item:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  .image-item:nth-child(7) {
    grid-row-start: 2;
    grid-column-end: span 3;
  }
  .image-item:nth-child(4) {
    grid-row-start: 3;
    grid-column-end: span 2;
  }
  .image-item:nth-child(5) {
    grid-row-start: 3;
    grid-column-end: span 1;
  }
  .image-item:nth-child(10) {
    grid-row-start: 5;
    grid-column-end: span 2;
  }
  .image-item:nth-child(2) {
    grid-row-start: 6;
    grid-column-end: span 2;
  }

  .image-item img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`
