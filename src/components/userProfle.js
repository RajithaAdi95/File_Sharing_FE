import React, { Component } from "react";

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
      user_details: "",
      show_hide_edit: false,
      user_name: "",
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone_num: "",
      country: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/user/authorize", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      this.setState({ userData: data });

      fetch(`http://localhost:3000/api/user/${data.user_id}`, {
        method: "GET",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*"
        },
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "user_details");
        this.setState({ user_details: data });
      });
    });
  }

  logOut() {
    window.localStorage.removeItem("token");
    window.location.href = "./";
  }

  editProfile() {
    // console.log(this.state.show_hide_edit, "show_hide_edit");
    this.setState({ show_hide_edit: !this.state.show_hide_edit });
  }

  handleSubmit(e) {
    console.log('this.user_details ', this.state.user_details);
    e.preventDefault();
    const { user_name, email, password, first_name, last_name, phone_num, country } = this.state;
    console.log(user_name, email, password, first_name, last_name, phone_num, country);

    fetch(`http://localhost:3000/api/user/update/${this.state.user_details._id}`, {
      method: "PUT",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        user_name, email, password, first_name, last_name, phone_num, country
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userUpdate");
      if(data.success == true) {
        e.target.reset()
      }
    });
  }

  render() {
    const show_hide_edit = this.state.show_hide_edit;
    // if(show_hide_edit) {

    // }
    // else {

    // }

    return (
      <div>
        <button className="btn btn-primary" onClick={this.logOut}> LogOut </button>

        {
          show_hide_edit ? 
          <div >
            Username : <h5> {this.state.user_details.user_name} </h5>
            Email : <h5> {this.state.user_details.email} </h5>

            <button className="btn btn-primary" onClick={this.editProfile}> Edit Profile </button>
          </div> : 
          <form onSubmit={this.handleSubmit}>
            <h3>Update Profile</h3>
    
            <div className="d-flex flex-row">
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => this.setState({ user_name: e.target.value })}
                />
              </div>
      
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
            </div>

            <div className="d-flex flex-row">
              <div className="mb-3">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  onChange={(e) => this.setState({ first_name: e.target.value })}
                />
              </div>

              <div className="mb-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  onChange={(e) => this.setState({ last_name: e.target.value })}
                />
              </div>
            </div>
            
            <div className="d-flex flex-row">
              <div className="mb-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone number"
                  onChange={(e) => this.setState({ phone_num: e.target.value })}
                />
              </div>
      
              <div className="mb-3">
                <label>Country</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Country"
                  onChange={(e) => this.setState({ country: e.target.value })}
                />
              </div>
            </div>
    
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Update Profile
              </button>
            </div>
          </form>
        }
        
      </div>
    );
  }
}
