import React, { Component } from "react";
import "./App.css";
import { NavLink, Switch, Route, withRouter } from "react-router-dom";
import { Redirect } from "react-router";
import Register from "./Authentication/Register";
import Content from "./components/Content/Content";
import Login from "./Authentication/Login";
import Profile from "./Authentication/Profile";
import logo from "./assets/logo.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="top-nav">
          <NavLink to="/login">Log in</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/profile">My Profile</NavLink>
          <NavLink to="/content">
            <img src={logo} alt={logo} />
          </NavLink>
          <br />
        </nav>

        <section>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/content" component={Content} />
            <Route exact path="/" render={() => <Redirect to="/content" />} />
          </Switch>
        </section>
      </div>
    );
  }
  Logout = () => {
    localStorage.removeItem("jwt");
  };
}

export default withRouter(App);
