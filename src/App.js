import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import FileDashboard from "./components/file_dashboard";

function App() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   window.localStorage.removeItem("token")
  // }

  return (
    <Router>
      <div className="App">
      {/* <form onSubmit={handleSubmit}>
        <button type="submit">LogOut</button>
      </form> */}
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/userDetails" element={<UserDetails />} />
              <Route path="/fileDashboard" element={<FileDashboard />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
