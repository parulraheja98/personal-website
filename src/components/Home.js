import React, { Component } from "react";
import { Navbar, Nav, ListGroup , Button } from "react-bootstrap";
import SocialMediaIcons from 'react-social-media-icons';
import YouTube from 'react-youtube';
import "../App.css";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state={};
    this._onReady = this._onReady.bind(this);
    this.handleChatApp = this.handleChatApp.bind(this);
    this.handleExpenseApp = this.handleExpenseApp.bind(this);
    this.handleHaircutApp = this.handleHaircutApp.bind(this);
    this.handleShoppingApp = this.handleShoppingApp.bind(this);
  }


  handleChatApp() {

  }

  handleExpenseApp() {

  }

  handleHaircutApp() {
      this.props.history.push('/salonappointment');

  }

  handleShoppingApp() {

  }


  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
 
    const socialMediaIcons = [
      {
        url: 'https://github.com/parulraheja98',
        className: 'fa-github-square',
      },
      {
        url: 'https://www.linkedin.com/in/parul-raheja-57566712a',
        className: 'fa-linkedin',
      },
    ];

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
        <div className='main-header' style={{overflow:'hidden',backgroundColor:'antiquewhite'}}>
          <div style={{height:'20%',marginTop:'5%'}}>
            <div className='description-edit content-main' style={{}}>
              <h1> About Me </h1>
              <div> 
                I am a technology entusiast and full stack developer. <br />
                I am always open in learning new technologies <br /> and believe in geting shit done. <br />
                

              </div>
            </div>
            <img
              src="./personalimg.jpeg"
              style={{
                height: "300px",
                width:"300px",
                display:'block',
                borderRadius:'50%'
              }}
              className='description-edit'
              id="headerImage"
            />
            </div>
          <br />
        
        </div>
        <div id="contentForInterest">
          <ListGroup className='navBar'>
            <ListGroup.Item >
              <h1 id="projects" className='headerContent'> Projects </h1>
            </ListGroup.Item>

            <ListGroup.Item>
            <img
              src="./salonAppointment.PNG"
              style={{
                height: "200px",
                width:"200px",
                display:'block',
                borderRadius:'30%',

              }}
              className='description-edit'
              id="headerImage"
            />
            <img
              src="./expenseSharing.PNG"
              style={{
                height: "200px",
                width:"200px",
                display:'block',
                borderRadius:'30%'
              }}
              className='description-edit'
              id="headerImage"
            />



            </ListGroup.Item>

            <ListGroup.Item>
              <div className='image-info' style={{fontSize:'16px !important'}}> 
              <Button onClick={this.handleHaircutApp}> Salon Appointment </Button> <br />
              Schedules Haircut<br />  Appointment  for customers  </div>
              <div className='image-info'> 
              <Button onClick={this.handleExpenseApp}> Expense Sharing </Button> <br />
              Share Expenses Among Individuals </div>
            </ListGroup.Item>
            
            <ListGroup.Item>

            <img
              src="./shoppingCart.PNG"
              style={{
                height: "200px",
                width:"200px",
                display:'block',
                borderRadius:'30%'
              }}
              className='description-edit'
              id="headerImage"
            />

            <img
              src="./chatApp.PNG"
              style={{
                height: "200px",
                width:"200px",
                display:'block',
                borderRadius:'30%'
              }}
              className='description-edit'
              id="headerImage"
            />

            </ListGroup.Item>
            <ListGroup.Item>
              <div className='image-info' style={{fontSize:'16px !important'}}> 
              <Button onClick={this.handleShoppingApp}> Shopping Cart </Button> <br />
              Shopping Cart Application  </div>
              <div className='image-info'> 
              <Button onClick={this.handleChatApp}> Chat Application </Button> <br />
              Live Chat with Users </div>
            </ListGroup.Item>
            
            <ListGroup.Item>
              <h3>
                {" "}
                Developed a Common Chat Application for chatting among users{" "}
              </h3>
              <div>
              Technologies used :- HTML , CSS , JS , Laravel, SQL <br />
              <a href='https://github.com/parulraheja98/ChatProject'> Github URL </a>
              </div>
              <br />
            </ListGroup.Item>


            <ListGroup.Item>
              <h3>
                {" "}
                Developed an Online Shopping Cart {" "}
              </h3>
              <div>
              Technologies Used :-  HTML , CSS , ReactJS,Express JS,MongoDB <br />
              <a href='https://github.com/parulraheja98/shopping-cart-express-react'> Github URL </a>
              </div>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3> Developed a Household Expense Sharing App </h3>
              <div>
                Technologies Used :- HTML , CSS , ReactJS,Express JS,MongoDB <br />
                <a href='https://github.com/parulraheja98/household-share-expense'> Github URL </a>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3> Developed a Salon Appointment Scheduling App </h3>
              <div>
                Technologies Used :- ReactJS,Express JS,MongoDB <br />
                <a href='https://github.com/parulraheja98/salon-appointment-app'> Github URL </a>
                <YouTube
                videoId="YeFpcJwyrr4"
                opts={opts}
                onReady={this._onReady}
                />
              </div>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup className='navBar'>
            <ListGroup.Item >
              <div id="education">
                <h1 className='headerContent'> Education </h1>
                <div id="university">
                  {" "}
                  <h3><span className='uniTitle'>University of Winnipeg </span> <span class="year">
                    {" "}
                    
                  </span>{" "}
                  </h3>
                </div>
                <div id="course"> BSC Applied Computer Science   &nbsp; <span> (2016-2020) </span> </div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
             
              className="skills"
              style={{ }}
            >
              <div id="skills">
                <h1 className='headerContent'> Skills </h1>
                <h3>Programming Languages: </h3> 
                <div>Java, Node JS , C , C++ , PHP <br /> </div>
                <h3 className='skills-header'> Web/Scripting:</h3>
                <div>  HTML, CSS, JavaScript,JQuery  </div>
                <h3 className='skills-header'> Web/Frameworks:</h3>
                <div> Express.js, Meteor.js , Laravel  </div>
                <h3 className='skills-header'> Databases:</h3>
                <div> MongoDB , SQL Server</div>
              </div>
            </ListGroup.Item>

            <ListGroup.Item  style={{}}>
              <div id="contact">
                <h2 className='headerContent'> Contact Information </h2>         
                <SocialMediaIcons
                  icons={socialMediaIcons}
                  iconColor={'#495056'}
                  className='socialMedia'
                />
                
                Email :- parulraheja98@gmail.com
              </div>
            </ListGroup.Item>
          </ListGroup>
          
        </div>
      </div>
    );
  }
}

export default Home;
