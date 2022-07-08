import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { CarsImageGrid } from "../Gallery/GalleryElements"

const Cars = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "Cars" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <CarsImageGrid>
      {data.allFile.edges.map((image, key) => (
        <Img
          key={key}
          className={"image-item"}
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]}
        />
      ))}
    </CarsImageGrid>
  )
}

export default Cars
