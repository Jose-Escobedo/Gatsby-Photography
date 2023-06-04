import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <AboutContainer id="about">
      <div id="about-wrapper">
        <h2>Why choose Escobedo Photography?</h2>
        <div class="flex-container">
          <div class="flex-item">
            <h3>Passion</h3>
            <ul>
              <li>Capturing the essence of each moment through the lens</li>
              <li>Translating emotions into timeless visual stories</li>
              <li>
                Creating images that evoke genuine connections and memories
              </li>
            </ul>
          </div>
          <div class="flex-item">
            <h3>Creativity</h3>
            <ul>
              <li>
                Infusing unique perspectives and artistic flair into every shot
              </li>
              <li>Exploring unconventional angles and compositions</li>
              <li>Pushing boundaries to deliver visually stunning results</li>
            </ul>
          </div>
          <div class="flex-item">
            <h3>Professionalism</h3>
            <ul>
              <li>Providing a seamless and enjoyable photography experience</li>
              <li>Adapting to various environments and subjects with ease</li>
              <li>Meeting deadlines and exceeding client expectations</li>
            </ul>
          </div>
        </div>
      </div>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  width: 100%;
  min-height: 75vh;
  h2 {
    font-weight: 500;
    @media screen and (max-width: 515px) {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 450px) {
      font-size: 1rem;
    }
  }

  #about-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20vh;
    @media screen and (max-width: 860px) {
      padding-top: 10vh;
      padding-bottom: 5vh;
    }
    @media screen and (max-width: 515px) {
      padding-top: 12vh;
    }
  }

  .flex-container {
    display: flex;
    padding: 20px;
    justify-content: center;
    gap: 10px;
    @media screen and (max-width: 860px) {
      flex-direction: column;
    }
  }
  .flex-item {
    padding: 30px;
    color: white;
    background-color: black;
    border-radius: 5px;
    h3 {
      font-weight: 500;
    }
    li {
      @media screen and (max-width: 515px) {
        padding: 10px;
      }
    }
  }
`

export default About
