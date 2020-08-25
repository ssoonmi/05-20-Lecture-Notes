import React from 'react';

class FruitBulkAdd extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fruitToAdd: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ fruitToAdd: e.target.value });
  }

  addFruitsClick = () => {
    const { fruitToAdd } = this.state;
    if (fruitToAdd) {
      const fruit = fruitToAdd
        .split(' ')
        .map((fruitName) => fruitName.toUpperCase());
      this.props.addBulk(fruit);
      this.setState({ fruitToAdd: '' });
    }
  }

  render() {
    return (
      <div>
        <h3>Bulk Add</h3>
        <input
          type="text"
          placeholder="Add one or more fruits separated by spaces"
          value={this.state.fruitToAdd}
          onChange={this.handleInputChange}
          style={{ width: 300 }}
        />
        <button onClick={this.addFruitsClick}>ADD FRUITS</button>
      </div>
    );
  }
}

export default FruitBulkAdd;
