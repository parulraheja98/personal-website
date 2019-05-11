import React,{Component} from 'react';
import {Nav,Navbar} from 'react-bootstrap';
import '../App.css';
import {withRouter,Redirect} from 'react-router-dom';

class NavigationBar extends Component {

constructor(props) {
    super(props);
   
    this.state = {hour:''};
    this.getHour = this.getHour.bind(this);
    this.testchanges = this.testchanges.bind(this);

}

componentDidMount() {
    

}




getHour() {
    var date = new Date();
    var hour = date.getHours();
    console.log('just check');
    this.setState({hour});

}

render() {

    return (
        
        
            
        <>
        </>

    )


}

}

export default NavigationBar;