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
  componentDidMount() {
    window.scrollTo(0, 0);
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
                    src="./shoppingCart.png"
                    style={{
                        height: '100%',
                        width:'35%',
                        margin:'0px auto',
                        display:'block'

                    }}
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
                <iframe width="50%" height="315px" src="https://www.youtube.com/embed/pe3aXgGSTJc?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item variant='info'>
                    Description
                </ListGroup.Item>
                <ListGroup.Item>
                    The application is intended for users who are interacting in ecommerce stores  <br />
		</ListGroup.Item>
		<ListGroup.Item>
                    Users can add products to the cart and checkout  <br />
                </ListGroup.Item>
		<ListGroup.Item>   
		    Users can create their own custom products  <br />
                </ListGroup.Item>
		<ListGroup.Item>    
		    Users are notified when the product is running out of inventory
                </ListGroup.Item>
            </ListGroup>
            <ListGroup>
                <ListGroup.Item>   Technologies Used :- ReactJS,Express JS,MongoDB  </ListGroup.Item>
                <ListGroup.Item> <a href='https://github.com/parulraheja98/shopping-cart-express-react'> Github URL </a> </ListGroup.Item>
            </ListGroup>
            </div>

        </div>




    )
}
}

export default ShoppingCart;
