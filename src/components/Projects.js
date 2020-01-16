import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
class Projects extends Component {
    render() {
        return (
            <div class="row" style={{ margin: "25px" }}>
                <div class="col-sm-6">
                    <Card>
                        <Card.Img variant="top" src="expenseSharing.PNG" onClick={() => this.props.handleClick("expenseshare")} />
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card>
                        <Card.Img variant="top" width="100%" height="100%" src="shoppingCart.jpg" onClick={() => this.props.handleClick("shoppingcart")} />
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card>
                        <Card.Img variant="top" width="100%" height="100%" src="chatApp.PNG" onClick={() => this.props.handleClick("chatapp")} />
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card>
                        <Card.Img variant="top" src="salonAppointment.PNG" onClick={() => this.props.handleClick("salonappointment")} />
                    </Card>
                </div>
            </div>
        )
    }
}


export default Projects;