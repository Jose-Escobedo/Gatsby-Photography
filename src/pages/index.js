import React from "react"
import HeroSection from "../components/HeroSection/HeroSection"
import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/About/About"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <About />
  </Layout>
)

export default IndexPage
