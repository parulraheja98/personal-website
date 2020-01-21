import React, { Component } from 'react';
import { CardColumns, Card, Button } from 'react-bootstrap';
import "../App.css";
import styled from 'styled-components';

const StyledDiv = styled.div`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

const StyledCard = styled(Card)`
    border-style: none;

`;


class Projects extends Component {
    render() {
        return (
            <div className="row" style={{ margin: "25px" }}>
                <StyledDiv className="col-sm-6">
                    <StyledCard>
                        <div className="projContainer-expense">
                            <Card.Img className="imgEdit" variant="top" src="expenseSharing.PNG" />
                            <div class="overlay">
                                <Button className="btnEdit" variant="light" onClick={() => this.props.handleClick("expenseshare")} >View Project</Button>
                            </div>
                        </div>
                    </StyledCard>
                </StyledDiv>
                <StyledDiv className="col-sm-6">
                    <StyledCard>
                        <div className="projContainer-salon">
                            <Card.Img variant="top" src="salonAppointment.PNG" />
                            <div class="overlay">
                                <Button className="btnEdit" variant="light" onClick={() => this.props.handleClick("salonappointment")}>View Project</Button>
                            </div>
                        </div>
                    </StyledCard>
                </StyledDiv>
                <StyledDiv className="col-sm-6">
                    <StyledCard>
                        <div className="projContainer-chat">
                            <Card.Img variant="top" width="100%" height="100%" src="chatApp.PNG" />
                            <div class="overlay">
                                <Button className="btnEdit" variant="light" onClick={() => this.props.handleClick("chatapp")} >View Project</Button>
                            </div>
                        </div>
                    </StyledCard>
                </StyledDiv>
                <StyledDiv className="col-sm-6">
                    <StyledCard>
                        <div className="projContainer-shopping">
                            <Card.Img variant="top" width="100%" height="100%" src="shoppingCart.jpg" />
                            <div class="overlay">
                                <Button className="btnEdit" variant="light" onClick={() => this.props.handleClick("shoppingcart")}>View Project</Button>
                            </div>
                        </div>
                    </StyledCard>
                </StyledDiv>
            </div>
        )
    }
}


export default Projects;