import React, {Component} from 'react';
import ShelfBook from './ShelfBook';

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.image})`
            }}
          />
          <ShelfBook
            onChangeShelf={this.props.onChangeShelf}
            book={this.props.book}
            shelf={this.props.shelf}
          />
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    );
  }
}

export default Book;
