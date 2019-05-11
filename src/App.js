import React, { Component } from "react";
import Home from './components/Home';
import { Navbar, Nav, ListGroup , Button } from "react-bootstrap";
import {BrowserRouter,Route} from 'react-router-dom';
import {Switch } from 'react-router';
import SocialMediaIcons from 'react-social-media-icons';
import YouTube from 'react-youtube';
import "./App.css";
import SalonAppointment from './components/SalonAppointment';
import ChatApplication from './components/ChatApplication';
import ExpenseShare from './components/ExpenseShare';
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {

  constructor(props) {
    super(props);
    this.state={};
    
  }

  render() {
  
    return (
      <BrowserRouter>
      <div>
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/salonappointment' component={SalonAppointment} />
          <Route exact path='/chatapp' component={ChatApplication} />
          <Route exact path='/shoppingcart' component={ShoppingCart} />
          <Route exact path='/expenseshare' component={ExpenseShare} />
        </Switch>
        </div>
</BrowserRouter>
      
    );
  }
}

export default App;
