import React, { Component } from 'react';
import './App.css';
import { NavLink, Switch, Route, withRouter } from 'react-router-dom'
import { Redirect } from 'react-router';
import Register from './Authentication/Register'
import Content from './components/Content/Content'
import Login from "./Authentication/Login";


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className='top-nav'>
          <NavLink to='/login' style={{ textDecoration: 'none' }}>Log in</NavLink>
          &nbsp;|&nbsp;
          <NavLink to='/register' style={{ textDecoration: 'none' }}>Register</NavLink>
          <NavLink to='/content' style={{ textDecoration: 'none' }}>
          <h1>Research Pal</h1>
          </NavLink>
          <br />          
        </nav>

        <section>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/content' component={Content} />
            <Route path='/' render={() => (
              <Redirect to='/content' />
            )
            } />
          </Switch>
        </section>
      </div>
    );
  }
  Logout = () => {
    localStorage.removeItem('jwt');
  };
}

export default withRouter(App);
