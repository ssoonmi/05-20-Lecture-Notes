import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  updateInputVal = e => {
    this.setState({ inputValue: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchGifs(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.updateInputVal}
          placeholder="Search for a GIF!"
        />
      </form>
    );
  }
};

export default SearchBar;
