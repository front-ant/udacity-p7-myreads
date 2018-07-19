import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';

class ShelfBook extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={event => {
            this.changeShelf(event.target.value);
          }}>
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
