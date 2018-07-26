import React, {Component} from 'react';

class ShelfBook extends Component {
  state = {
    currentShelf: this.props.shelf
  };

  handleChange = event => {
    const newShelf = event.target.value;
    const currentBook = this.props.book;
    // call onChangeShelf method that was passed down from App.js, causing a rerender
    this.props.onChangeShelf(currentBook, newShelf);
    // also update the state so that the newly selected shelf will be highlighted
    this.setState({currentShelf: newShelf});
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.currentShelf} onChange={this.handleChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfBook;
