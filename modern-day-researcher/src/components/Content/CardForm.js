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
      public: false
    };
  }

  addArticle = event => {
    this.props.addNewArticle(this.state);

    this.setState({
      title: "",
      category: [],
      link: "",
      imgURL: ""
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
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
            {/* <input
              onChange={this.handleInputChange}
              placeholder="Category"
              value={this.state.category}
              name="category"
              className="input-box"
            /> */}
            <input
              onChange={this.handleInputChange}
              placeholder="Link"
              value={this.state.link}
              name="link"
              className="input-box"
            />
            <select name="categories">
              <option value="news">News</option>
              <option value="health">Health</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="design">Design</option>
              <option value="misc">Misc</option>
            </select>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="share"
                value="public"
                checked={true}
                className="form-check-input"
              />
              Public
            </label>

            <label>
              <input
                type="radio"
                name="share"
                value="private"
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
