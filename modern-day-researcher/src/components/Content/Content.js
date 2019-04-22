import React, { Component } from 'react';

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

  render(){
    return (
      <div className="content-container">
      <TabList tabs={this.state.tabs} /> 
      <CardList cards={this.state.cards}/>
      </div>
    )
  }
}