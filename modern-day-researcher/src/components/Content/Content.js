import React, { Component } from 'react';
import axios from "axios";

import TabList from './TabList';
import CardList from './CardList';


export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }
  authenticate = () => {
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
        Authorization: token
      }
    }
  }

    // if (token) {
    //   axios.get('http://localhost:3000/api/content', options)
    //     .then(res => {
    //       if (res.status === 200 && res.data) {
    //         this.setState({ loggedIn: true, content: res.data })
    //       } else {
    //         throw new Error();
    //       }
    //     })
    //     .catch(err => {
    //       this.props.history.push('/login')
    //     })
    // } else {
    //   this.props.history.push('/login')
    // }
  

  componentDidMount() {
    this.authenticate()
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname === '/' && pathname !== prevProps.location.pathname) {
      this.authenticate();
    }
  }

  logout = () => {
    localStorage.removeItem('jwt')
    this.props.history.push('/Login')
  }


  changeSelected = tab => {
    this.setState({selected: tab });
  };

  filterCards = () => {
   if (this.state.selected === 'all') {
     return this.state.cards;
   } else {
     return this.state.cards.filter(card => card.tab === this.state.selected);
   }
  
  };

  // addNewArticle = link => {
  //   axios
  //     .post("http://localhost:3333/", this.state)
  //     .then(res => this.setState({ links: res.data }))
  //     .catch(err => console.log(err));
  // };

  render(){
    return (
      <div className="content-container">
      <TabList tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/> 
      <CardList cards={this.filterCards()}/>
      </div>
    )
  }
}