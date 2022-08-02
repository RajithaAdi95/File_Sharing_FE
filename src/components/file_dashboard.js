import React, { Component } from "react";

export default class FileDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  logOut() {
    window.localStorage.removeItem("token");
    window.location.href = "./";
  }

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.logOut}>LogOut</button>
        <h1> Welcome to Dashboard </h1>
      </div>
    );
  }
}
