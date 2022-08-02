import React, { Component } from "react";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/user/authorize", {
      method: "GET",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      responseType: {
        "text": "json"
      }
      // body: JSON.stringify({
      //   token: window.localStorage.getItem("token"),
      // }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        // this.setState({ userData: data });
      });
  }
  render() {
    return (
      <div>
        {/* Name<h1>{this.state.userData.fname}</h1>
        Email <h1>{this.state.userData.email}</h1> */}
      </div>
    );
  }
}
