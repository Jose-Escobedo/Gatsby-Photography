import styled from "styled-components"

export const GalleryImageContainer = styled.div`
  text-align: center;
  margin: 150px 0;
  h1 {
    text-align: center;
    background: url("../images/Landscape/trees-sun.jpg") center center/ cover
      no-repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
    margin-top: -80px;
    color: #fff;
    font-size: 8rem;
  }

  /* text-align: center;
  background: url("../images/Landscape/trees-sun.jpg") center center/ cover
    no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
  color: #fff;
  font-size: 8rem; */
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
  .image-item:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }
  .image-item img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`
