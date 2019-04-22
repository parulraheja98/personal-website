import React, { Component } from "react";
import { Navbar, Nav, ListGroup } from "react-bootstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="#projects">Project</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact </Nav.Link>
          </Nav>
        </Navbar>
        <div style={{height:'20%'}}>
          <img
            src="./personalimg.jpg"
            style={{
              height: "300px",
              width:"300px",
              display:'block',
              margin:'0px auto',
              transform:"rotate(90deg)",
              marginTop:'100px'
            }}
            id="headerImage"
          />
          </div>
        <br />
        <div id="header">
          <h1 style={{ textAlign: "center" }}>
            {" "}
            Hi All, my name is Parul Raheja .
          </h1>
        </div>

        <div id="contentForInterest">
          <ListGroup>
            <ListGroup.Item variant="info">
              <h1 id="projects"> Projects </h1>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>
                {" "}
                Developed a Common Chat Application for chatting among users{" "}
              </h3>
              Technologies used :- HTML , CSS , JS , Laravel
              <br />
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>
                {" "}
                Developed an Online Quiz Application for students in university{" "}
              </h3>
              Technologies Used :- HTML , CSS , ReactJS,Node JS
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>
                {" "}
                Developed an Online Shopping Cart {" "}
              </h3>
              Technologies Used :- HTML , CSS , ReactJS,Node JS
            </ListGroup.Item>

            <ListGroup.Item>
              <h3> Current Projects that i am working on include :- </h3>
              Developing a household application for people living in a
              household and sharing their expenses with each other . <br />
              The application will help users in even distribution of expenses
              among the users.
            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <ListGroup.Item variant="info">
              <div id="education">
                <h1> Education </h1>
                <div id="university">
                  {" "}
                  University of Winnipeg <span class="year">
                    {" "}
                    2016-2020{" "}
                  </span>{" "}
                </div>
                <div id="course"> BSC Applied Computer Science </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              variant="info"
              className="skills"
              style={{ marginTop: 50 }}
            >
              <div id="skills">
                <h1> Skills </h1>
                Programming Languages: Java, Node JS , C , C++ , PHP <br />
                Web/Scripting: HTML, CSS, JavaScript,JQuery <br />
                Web/Frameworks: Express.js, Meteor.js , Laravel <br />
                Databases: MongoDB , SQL Server <br />
              </div>
            </ListGroup.Item>

            <ListGroup.Item variant="info" style={{ marginTop: 50 }}>
              <div id="contact">
                <h2> Contact Information </h2>
                Feel free to reach me on linked in at{" "}
                <a href="https://www.linkedin.com/in/parul-raheja-57566712a">
                  <img
                    src="./linkedinContact.jpg"
                    id="footerImage"
                    style={{ height: "30px", width: "30px" }}
                  />
                </a>
                <br />
                Email :- parulraheja98@gmail.com
              </div>
            </ListGroup.Item>
          </ListGroup>
          
        </div>
      </div>
    );
  }
}

export default App;
