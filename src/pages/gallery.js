import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landscape from "../components/Categories/Landscape"
import { GalleryImageContainer } from "../components/Gallery/GalleryElements"

const gallery = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <GalleryImageContainer>
        <div style={{ display: "grid" }}>
          <StaticImage
            style={{
              gridArea: "1/1",
              opacity: "80%",
              filter: "blur(3px)",
            }}
            layout="fullWidth"
            aspectRatio={3 / 1}
            alt="trees-sun"
            src={"../images/Landscape/backyard.jpeg"}
            formats={["auto", "webp", "avif"]}
          />
          <div
            style={{
              gridArea: "1/1",
              position: "relative",
              placeItems: "center",
              display: "grid",
            }}
          >
            <h1>Gallery</h1>
          </div>
        </div>
        <h2>Landscape/Animals</h2>
        <Landscape />
      </GalleryImageContainer>
    </Layout>
  )
}

export default gallery
