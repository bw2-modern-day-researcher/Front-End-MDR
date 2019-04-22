import React, { Component } from 'react';
import axios from "axios";

import TabList from './TabList';
import CardList from './CardList';
import { tabData, cardData } from '../../data';


export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: tabData,
      cards: cardData
    })
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

  addNewArticle = link => {
    axios
      .post("http://localhost:3333/", this.state)
      .then(res => this.setState({ links: res.data }))
      .catch(err => console.log(err));
  };

  render(){
    return (
      <div className="content-container">
      <TabList tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/> 
      <CardList cards={this.filterCards()}/>
      </div>
    )
  }
}