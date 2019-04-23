import React, { Component } from 'react';
import axios from 'axios';

const initialUser = {
  username: '',
  password: '',
  email: ''
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { ...initialUser },
      message: '',
    }
  }

  inputHandler = event => {
    const { name, value } = event.target;
    this.setState({ user: { ...this.state.user, [name]: value } })
  }

  submitHandler = event => {
    event.preventDefault();
    axios.post(`http://localhost:3300/api/login`, this.state.user)
      .then(res => {
        if (res.status === 200 && res.data) {
          localStorage.setItem('jwt', res.data.token)
          this.props.history.push('/content')
        } else {
          throw new Error();
        }
      })
      .catch(err => {
        this.setState({
          message: 'Authentication failed',
          user: { ...initialUser }
        })
      })
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.submitHandler}>
          <section>
            <h1>Login Page</h1>
          </section>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.user.username}
            onChange={this.inputHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.user.password}
            onChange={this.inputHandler}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={this.state.user.email}
            onChange={this.inputHandler}
          />
          <button type="submit">Submit</button>
        </form>
        {this.state.message
          ? (<h4>{this.state.message}</h4>)
          : undefined
        }
      </div>
    )
  }
} 
export default Login;