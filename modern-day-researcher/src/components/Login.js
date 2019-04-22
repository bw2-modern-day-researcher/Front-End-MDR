import React from "react";

class Login extends React.Component {
  constructor() {
    super();
    this.state ={
      username: "", 
      password: "",
      email: ""
    }
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  login = () => {
    const userName = {
      username: this.state.username
    };
    this.setState({
      userName,
      username: ""
    })
    localStorage.setItem("username", this.state.username);
  }

  render() {
    return (
    <div className="login-form">
      <form>
        <input 
        className="login-input"
        name="username"
        placeholder="Username"
        value={this.state.username}
        onChange={this.handleChanges}
        />
        <input
        className="login-input"
        name="password"
        placeholder="Password"
        />
        <input
        className="login-input"
        name="email"
        placeholder="Email (optional)"
        />
        <button onClick={this.login}>Login</button>
      </form>
    </div>
    )
  }
}

export default Login;