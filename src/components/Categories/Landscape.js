import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { LandscapeImageGrid } from "../Gallery/GalleryElements"

const Landscape = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "Landscape" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <LandscapeImageGrid>
      {data.allFile.edges.map((image, key) => (
        <Img
          key={key}
          className={"image-item"}
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]}
        />
      ))}
    </LandscapeImageGrid>
  )
}

export default Landscape
