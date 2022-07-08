import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { FoodImageGrid } from "../Gallery/GalleryElements"

const Food = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "Food" } }) {
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
    <FoodImageGrid>
      {data.allFile.edges.map((image, key) => (
        <Img
          key={key}
          className={"image-item"}
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]}
        />
      ))}
    </FoodImageGrid>
  )
}

export default Food
