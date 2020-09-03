import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../App.css";
import { withRouter, Redirect } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

class NavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  navigateHome() {
    this.props.history.push("");
  }

  render() {
    return (
      <>
        <Navbar bg="info" variant="info">
          <MdKeyboardBackspace style={{ cursor: "pointer" }} onClick={this.navigateHome.bind(this)} />
        </Navbar>
      </>
    );
  }
}

export default withRouter(NavigationBar);
