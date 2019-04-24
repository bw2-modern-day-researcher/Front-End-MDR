import React, { Component } from "react";
import axios from "axios";

import TabList from "./TabList";
import CardList from "./CardList";
import CardForm from "./CardForm";
import { tabData } from "../../data";

export default class Content extends Component {
  constructor() {
    super();
    this.state = {
      selected: "all",
      tabs: [],
      cards: [],
      newPost: [],
      username: ""
    };
  }

  getPost = () => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };

    if (token) {
      axios
        .get(
          "https://modern-day-researcher-backend.herokuapp.com/api/post",
          options
        )
        .then(res => {
          if (res.status === 200 && res.data) {
            console.log(res.data);
            console.log(res.data.category)
            this.setState({ loggedIn: true, tabs: tabData, cards: res.data });
          } else {
            throw new Error();
          }
        })
        .catch(err => {
          this.props.history.push("/login");
        });
    }
  };

  componentDidMount() {
    this.getPost();
  }

  componentDidUpdate(prevProps) {
    const { pathname } = this.props.location;
    if (pathname === "/" && pathname !== prevProps.location.pathname) {
      this.getPost();
    }
    if (this.state.newPost.length > 0) {
      this.getPost();
      this.setState({
        newPost: []
      });
    }
  }

  logout = () => {
    localStorage.removeItem("jwt");
    this.props.history.push("/Login");
  };

  changeSelected = tab => {
    this.setState({ selected: tab });
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => card.tab === this.state.selected);
    }
  };

  addNewArticle = info => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };

    if (token) {
      axios
        .post(
          "https://modern-day-researcher-backend.herokuapp.com/api/post/create",
          info,
          options
        )
        .then(res => this.setState({ newPost: res.data }))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="content-container">
        <TabList
          tabs={this.state.tabs}
          selectedTab={this.state.selected}
          selectTabHandler={this.changeSelected}
        />
        <CardList cards={this.filterCards()} />
        <CardForm addNewArticle={this.addNewArticle} />
      </div>
    );
  }
}
