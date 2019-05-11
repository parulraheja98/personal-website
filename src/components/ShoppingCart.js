import React,{Component} from 'react';
import YouTube from 'react-youtube';
import {ListGroup} from 'react-bootstrap';
import '../App.css';
class ShoppingCart extends Component {


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
                    src="./shoppingCart.PNG"
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
                <ListGroup.Item>Get more experience working with React Cookie and Express Session Storage </ListGroup.Item>
                <ListGroup.Item>Learn How to Make Unit Test with Mocha JS Library </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Video Description

                </ListGroup.Item>
                <ListGroup.Item>
                    <YouTube
                            videoId="pe3aXgGSTJc"
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
                    The application is intended for users who are interacting in ecommerce stores  <br />
                    Users can add products to the cart and checkout  <br />
                    Users can create their own custom products  <br />
                    Users are notified when the product is running out of inventory

                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item> <a href='https://github.com/parulraheja98/shopping-cart-express-react'> Github URL </a> </ListGroup.Item>
            </ListGroup>
            </div>

        </div>




    )
}
}

export default ShoppingCart;