import { Container } from "@mantine/core";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { FooterWrapper, Li, MadeBy, Ul } from "./style";

export default function Footer() {
  return (
    <FooterWrapper
      id="footer"
      style={{
        marginTop: "auto",
      }}
    >
      <Container size="xl">
        <div className="container-main-project">
          <div>
            <span>
              Copyright &#169; 2023 Your company | Design :
              <MadeBy> Ahmed Mansour</MadeBy>
            </span>
          </div>
          <div>
            <Ul>
              <Li>
                <a href="https://www.facebook.com/ahmed.mask.184">
                  <FaFacebook />
                </a>
              </Li>
              <Li>
                <a href="https://twitter.com/ahmedma66567002">
                  <FaTwitter />
                </a>
              </Li>
              <Li>
                <a href="https://www.linkedin.com/in/ahmed-mansour-b6b407213/">
                  <FaLinkedin />
                </a>
              </Li>
              <Li>
                <a href="https://www.youtube.com/channel/UC2is6EFgtUfFbDZbbDwYIoQ">
                  <FaYoutube color="red" />
                </a>
              </Li>
            </Ul>
          </div>
        </div>
      </Container>
    </FooterWrapper>
  );
}
