import React, { Component } from "react";
import { Navbar, Nav, ListGroup, Button } from "react-bootstrap";
import SocialMediaIcons from "react-social-media-icons";
import YouTube from "react-youtube";
import Projects from "./Projects.js";
import "../App.css";
import Introduction from "./Introduction.js";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import Particles from "react-particles-js";

const StyledListItem = styled.div`
  margin-left: 2% !important;
`;

const HeaderContent = styled.h1`
  color: dodgerblue;
  border-radius: 20px;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onReady = this._onReady.bind(this);
    this.handleClickEvt = this.handleClickEvt.bind(this);
  }

  handleClickEvt(navRoute) {
    this.props.history.push(`/${navRoute}`);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    const socialMediaIcons = [
      {
        url: "https://github.com/parulraheja98",
        className: "fa-github-square",
      },
      {
        url: "https://www.linkedin.com/in/parul-raheja-57566712a",
        className: "fa-linkedin",
      },
    ];

    return (
      <div>
        <Introduction />
        <div id="contentForInterest">
          <ListGroup className="navBar">
            <ListGroup.Item>
              <StyledListItem>
                <HeaderContent id="projects"> Projects </HeaderContent>
              </StyledListItem>
            </ListGroup.Item>

            <Projects handleClick={this.handleClickEvt} />

            <ListGroup className="navBar" style={{ background: "black" }}>
              <ListGroup.Item>
                <StyledListItem>
                  <HeaderContent id="education"> Education </HeaderContent>
                  <div id="university">
                    {" "}
                    <h3>
                      <span className="uniTitle">University of Winnipeg </span>{" "}
                      <span class="year"> </span>{" "}
                    </h3>
                  </div>
                  <div id="course">
                    {" "}
                    BSC Applied Computer Science &nbsp;{" "}
                    <span> (2016-2020) </span>{" "}
                  </div>
                </StyledListItem>
              </ListGroup.Item>

              <ListGroup.Item className="skills" style={{}}>
                <StyledListItem>
                  <HeaderContent id="skills"> Skills </HeaderContent>
                  <h3>Programming Languages: </h3>
                  <div>
                    Java, Node JS , C , C++ , PHP, Python
                    <br />{" "}
                  </div>
                  <h3 className="skills-header"> Web/Scripting:</h3>
                  <div> HTML , CSS , JavaScript , JQuery </div>
                  <h3 className="skills-header"> Web/Frameworks:</h3>
                  <div> Express.js , Meteor.js , Laravel , React JS </div>
                  <h3 className="skills-header"> Databases:</h3>
                  <div> MongoDB , SQL Server</div>
                  <h3 className="skills-header"> Cloud Platform:</h3>
                  <div> Amazon Web Services , Google Kubernetes Engine</div>
                </StyledListItem>
              </ListGroup.Item>

              <ListGroup.Item style={{}}>
                <StyledListItem>
                  <HeaderContent id="contact">
                    {" "}
                    Contact Information{" "}
                  </HeaderContent>
                  <SocialIcon
                    url="https://github.com/parulraheja98"
                    bgColor="#211F1F"
                    style={{ height: 30, width: 30 }}
                  />
                  <SocialIcon
                    url="https://www.linkedin.com/in/parul-raheja-57566712a/"
                    style={{ height: 30, width: 30, marginLeft: 5 }}
                  />
                </StyledListItem>
              </ListGroup.Item>
            </ListGroup>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Home;
