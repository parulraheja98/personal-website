import React, { Component } from 'react';
import { CardColumns, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledImg = styled(Card.Img)`
@media (max-width: 1200px) { 
    width: 100% !important;
  }
  
  @media (max-width:2000px) and (min-width:1201px) {
      width: 50% !important;
  }
  @media (max-width:3000px) and (min-width:2001px) {
      width: 40% !important;
  }
`;


class Introduction extends Component {
    render() {
        return (
            <div class="row" style={{ margin: "25px" }}>
                <div class="col-sm-6">
                    <Card className="no-border">
                        <Card.Body>
                            <Card.Title> <h1 style={{ color: "#1e90ff" }}> Parul Raheja </h1></Card.Title>
                            <Card.Text>
                                <div className='descEditContent'>
                                    I am a technology enthusiast and full stack developer. <br />
                                    I am always open in learning new technologies. <br />
                                    Check out my <a href="./Parul_Raheja_Resume.pdf" target="_blank"> <u> Resume. </u> </a>
                                </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-sm-6">
                    <Card className="no-border">
                        <StyledImg style={{ "border-radius": "50%" }} className="profileImg" variant="top" height="400px" src="personalpicture.jpg" onClick={() => this.props.handleClick("shoppingcart")} />
                    </Card>
                </div>
            </div>
        )
    }
}


export default Introduction;