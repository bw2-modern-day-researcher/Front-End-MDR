import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
      link: '',
      imgURL: ''
    };
  }

  addArticle = event => {
    event.preventDefault();
    this.props.addNewArticle(this.state)

    this.setState({
      title: '',
      category: '',
      link: '',
      imgURL: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="card-form">
        <form onSubmit={this.addArticle}>
          <input
            onChange={this.handleInputChange}
            placeholder="Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Link"
            value={this.state.link}
            name="link"
          />
          <button type="submit">Save Article</button>
        </form>
      </div>
    );
  }
}

export default CardForm;