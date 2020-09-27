import React, { Component } from "react";
import { CardColumns, Card } from "react-bootstrap";
import styled from "styled-components";
import Particles from "react-particles-js";
import { Navbar, Nav, ListGroup, Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

const StyledImg = styled(Card.Img)`
  @media (max-width: 1200px) {
    width: 100% !important;
  }

  @media (max-width: 1400px) and (min-width: 1200px) {
    width: 70% !important;
  }

  @media (max-width: 1600px) and (min-width: 1401px) {
    width: 60% !important;
  }

  @media (max-width: 2000px) and (min-width: 1601px) {
    width: 50% !important;
  }
  @media (max-width: 3000px) and (min-width: 2001px) {
    width: 40% !important;
  }
`;

class Introduction extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#000000",
          backgroundImage: "linear-gradient(147deg, #000000 0%, #434343 74%)",
          color: "white",
        }}
      >
        <Navbar className="justify-content-end">
          <Nav className="mr-sm-2">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact </Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ "border-radius": "50%" }}
              className="profileImg"
              variant="top"
              height="350px"
              width="350px"
              src="personalpicture.jpg"
            />
            <div style={{ fontSize: "32px" }}>
              Hi!, I'm Parul. I am a full stack developer and open source
              enthusiast. <br /> In my free time I enjoy hiking and learning new
              technologies.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
