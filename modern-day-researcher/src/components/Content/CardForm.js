import React, { Component } from "react";

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: [],
      link: "",
      imgURL: "",
      username: localStorage.getItem("username"),
      seen: false,
      public: 1
    };
  }

  addArticle = event => {
    this.props.addNewArticle(this.state);

    this.setState({
      ...this.state,
      title: "",
      category: [],
      link: "",
      imgURL: "",
      username: localStorage.getItem("username"),
      seen: false,
      public: 1
    });
  };

  handleInputChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="input-form">
        <h2>Add Article</h2>
        <form onSubmit={this.addArticle}>
          <div className="input">
            <input
              onChange={this.handleInputChange}
              placeholder="Title"
              value={this.state.title}
              name="title"
              className="input-box"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="Link"
              value={this.state.link}
              name="link"
              className="input-box"
            />
            <div className="category-select">
              <label className="category-label">Category:</label>
              <select name="category" onChange={this.handleInputChange}>
                <option value="news">News</option>
                <option value="health">Health</option>
                <option value="tech">Tech</option>
                <option value="finance">Finance</option>
                <option value="art">Art</option>
                <option value="misc">Misc</option>
              </select>
            </div>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="share"
                value="1"
                checked={true}
                className="form-check-input"
              />
              Public
            </label>

            <label>
              <input
                type="radio"
                name="share"
                value="0"
                className="form-check-input"
              />
              Private
            </label>
          </div>

          <button type="submit">Save Article</button>
        </form>
      </div>
    );
  }
}

export default CardForm;
