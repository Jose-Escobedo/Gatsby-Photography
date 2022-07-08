import styled from "styled-components"

export const GalleryImageContainer = styled.div`
  text-align: center;
  margin: 150px;
  h1 {
    margin-bottom: 4em;
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

  .image-item:nth-child(5) {
    grid-column-end: span 2;
  }
  .image-item:nth-child(9) {
    grid-column-end: span 2;
    grid-row-start: 4;
  }
  .image-item img:hover {
    transform: scale(1.1);
    transition: 0.6s all ease !important;
    cursor: pointer;
  }
`
