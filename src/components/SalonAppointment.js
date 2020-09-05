import React, { Component } from "react";
import YouTube from "react-youtube";
import { ListGroup } from "react-bootstrap";
import "../App.css";
import NavigationBar from "./NavigationBar.js";

class SalonAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this._onReady = this._onReady.bind(this);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <div className="salon-main">
        <div className="content-description">
        <NavigationBar />
          <ListGroup>
            <ListGroup.Item>
              <img
                src="./salonAppointment.PNG"
                style={{
                  height: "100%",
                  width: "35%",
                  margin: "0px auto",
                  display: "block",
                }}
                id="headerImage"
              />
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item variant="info">
              Motivation of this Project
            </ListGroup.Item>
            <ListGroup.Item>
              Get More Experience Working with React JS and Express JS
            </ListGroup.Item>
            <ListGroup.Item>
              Learn How To Insert Dynamic Input Boxes to Enter Data
            </ListGroup.Item>
            <ListGroup.Item>
              Learn more about React Bootstrap Library{" "}
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item variant="info">Video Description</ListGroup.Item>
            <ListGroup.Item>
              <iframe
                width="50%"
                height="315px"
                src="https://www.youtube.com/embed/YeFpcJwyrr4?rel=0"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item variant="info">Description</ListGroup.Item>
            <ListGroup.Item>
              The application helps in scheduling appointments for the customers
              by the admin <br />
            </ListGroup.Item>
            <ListGroup.Item>
              Customers can check the available date for the appointment <br />
            </ListGroup.Item>
            <ListGroup.Item>
              Customers can book the appointment and check upcoming appointments{" "}
              <br />
            </ListGroup.Item>
            <ListGroup.Item>
              Customer can reschedule their appointment
            </ListGroup.Item>
          </ListGroup>
          <ListGroup>
            <ListGroup.Item>
              {" "}
              Technologies Used :- ReactJS,Express JS,MongoDB{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              {" "}
              <a href="https://github.com/parulraheja98/salon-appointment-app">
                {" "}
                Github URL{" "}
              </a>{" "}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default SalonAppointment;
