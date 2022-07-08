import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landscape from "../components/Categories/Landscape"
import { GalleryImageContainer } from "../components/Gallery/GalleryElements"

const gallery = () => {
  return (
    <Layout>
      <Seo title="Gallery" />
      <GalleryImageContainer>
        <h1>Gallery</h1>
        <h2>Landscape/Animals</h2>
        <Landscape />
      </GalleryImageContainer>
    </Layout>
  )
}

export default gallery
