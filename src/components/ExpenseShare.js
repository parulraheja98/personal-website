import React,{Component} from 'react';
import YouTube from 'react-youtube';
import {ListGroup} from 'react-bootstrap';
import '../App.css';
class ExpenseShare extends Component {


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
                    src="./expenseSharing.PNG"
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
                <ListGroup.Item> As I live in shared household I wanted to keep track of my expenses </ListGroup.Item>
                <ListGroup.Item> Learn how Asynchronous queries work with Mongoose </ListGroup.Item>
                <ListGroup.Item> Learn how to use External API like NodeMailer to send email to users </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Video Description

                </ListGroup.Item>
                <ListGroup.Item>
                    <YouTube
                            videoId="DFZqQGCeYeU"
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
                    Users can create expenses that they want to share with other people in household  <br />
                    Users can create household and invite other user to join the household  <br />
                    Users have their own dashboard where they have list of bill payments they made and how much amount is due  <br />

                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item>   Technologies Used :- HTML , CSS , ReactJS,Express JS,MongoDB  </ListGroup.Item>
                <ListGroup.Item>  <a href='https://github.com/parulraheja98/household-share-expense'> Github URL </a>  </ListGroup.Item>
            </ListGroup>
            </div>

        </div>




    )
}
}

export default ExpenseShare;