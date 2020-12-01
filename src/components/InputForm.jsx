import React, { Component } from "react";

class InputForm extends Component {
  state = {
    content: "",
  };

  updateInputData = (e) => {
    const content = e.currentTarget.value;
    this.setState({ content });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.content);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="add a new item..."
            name="content"
            value={this.state.content}
            onChange={this.updateInputData}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Add</button>
      </form>
    );
  }
}

export default InputForm;
