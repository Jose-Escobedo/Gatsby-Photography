import React from "react"
import { FaLinkedin, FaMedium, FaGithub } from "react-icons/fa"
import {
  SocialMedia,
  FooterContainer,
  SocialMediaWrap,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  WebsiteRights,
  SocialLogo,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            ESCOBEDO PHOTOGRAPHY
          </SocialLogo>
          <WebsiteRights>
            ESCOBEDO PHOTOGRAPHY © {new Date().getFullYear()}
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.linkedin.com/in/jose-escobedo-89b943232/"
              target="_blank"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink
              href="https://medium.com/@escobedo.jose"
              target="_blank"
              aria-label="Medium"
              rel="noopener noreferrer"
            >
              <FaMedium />
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/Jose-Escobedo"
              target="_blank"
              aria-label="Github"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
