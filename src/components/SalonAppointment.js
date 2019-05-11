import React,{Component} from 'react';
import YouTube from 'react-youtube';
import {ListGroup} from 'react-bootstrap';
import '../App.css';
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

render() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: { 
          autoplay: 1
        }
      };

    return (
        <div className='salon-main'>
            <div className='content-description'>
            <ListGroup>
                <ListGroup.Item>
                    <img
                    src="./salonAppointment.PNG"
                    style={{
                        height: "300px",
                        width:'800px',

                    }}
                    className='description-edit'
                    id="headerImage"
                    />
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>Motivation of this Project</ListGroup.Item>
                <ListGroup.Item>Get More Experience Working with React JS and Express JS</ListGroup.Item>
                <ListGroup.Item>Learn How To Insert Dynamic Input Boxes to Enter Data</ListGroup.Item>
                <ListGroup.Item>Learn more about React Bootstrap Library </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Video Description

                </ListGroup.Item>
                <ListGroup.Item>
                    <YouTube
                            videoId="YeFpcJwyrr4"
                            opts={opts}
                            onReady={this._onReady}
                    />
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Description
                </ListGroup.Item>
                <ListGroup.Item>
                    The application helps in scheduling appointments for the customers by the admin <br />
                    Customers can check the available date for the appointment <br />
                    Customers can book the appointment and check upcoming appointments <br />
                    Customer can reschedule their appointment

                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item> <a href='https://github.com/parulraheja98/salon-appointment-app'> Github URL </a> </ListGroup.Item>
            </ListGroup>
            </div>

        </div>




    )
}
}

export default SalonAppointment;