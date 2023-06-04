import React from "react"
import { HeroContainer, HeroH1, HeroP, HeroButton } from "./HeroElements"
import { StaticImage } from "gatsby-plugin-image"
import { BsChevronDoubleDown } from "react-icons/bs"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroSection = () => {
  return (
    <HeroContainer>
      <StaticImage
        style={{
          gridArea: "1/1",
          opacity: "80%",
          filter: "blur(2px)",
        }}
        layout="fullWidth"
        aspectRatio={0.8 / 1}
        alt="mountain-top-main"
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
        <HeroButton onClick={() => scrollTo("#about")}>
          <BsChevronDoubleDown />
        </HeroButton>
      </div>
    </HeroContainer>
  )
}

export default HeroSection
