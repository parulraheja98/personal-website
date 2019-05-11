import React,{Component} from 'react';
import YouTube from 'react-youtube';
import {ListGroup} from 'react-bootstrap';
import '../App.css';
class ChatApplication extends Component {


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
                    src="./chatApp.PNG"
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
                <ListGroup.Item>Get More Experience Working with Laravel Framework</ListGroup.Item>
                <ListGroup.Item>Learn how to use external library like Pusher to handle Real Time Events </ListGroup.Item>
                <ListGroup.Item>Learn how asynchronous calls work  </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Video Description

                </ListGroup.Item>
                <ListGroup.Item>
                    <YouTube
                            videoId=""
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
                    The application is intended for users who want to live chat with each other in Real Time  <br />
                    Admin have access to all the messages posted  <br />
                    User can view other people message and update their own messages <br />
                    Admin can give read or write permission to the users 

                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item> <a href='https://github.com/parulraheja98/ChatProject'> Github URL </a> </ListGroup.Item>
            </ListGroup>
            </div>

        </div>




    )
}
}

export default ChatApplication;