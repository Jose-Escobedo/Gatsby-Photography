import React from "react"
import { HeroContainer, HeroH1, HeroP, HeroButton } from "./HeroElements"
import { StaticImage } from "gatsby-plugin-image"
import { BsChevronDoubleDown } from "react-icons/bs"

const HeroSection = () => {
  return (
    <HeroContainer>
      <StaticImage
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
          // maxHeight: 600,
          opacity: "80%",
          filter: "blur(2px)",
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={0.8 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../../images/Landscape/mountain-top.JPG"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        <HeroButton>
          <BsChevronDoubleDown />
        </HeroButton>
      </div>
    </HeroContainer>
  )
}

export default HeroSection
