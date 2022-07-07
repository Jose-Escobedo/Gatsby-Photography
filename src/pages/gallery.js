import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const gallery = () => {
  return (
    <div>
      <StaticImage
        style={{
          // You can set a maximum height for the image, if you wish.
          maxHeight: 600,
        }}
        layout="fixed"
        width={200}
        height={200}
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={1 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt="landscape-mtn"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src="../images/project-4.jpg"
        formats={["auto", "webp", "avif"]}
      />
    </div>
  )
}

export default gallery
