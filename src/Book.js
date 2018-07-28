import React, {Component, PureComponent} from 'react';
import ShelfBook from './ShelfBook';

class Book extends PureComponent {
  render() {
    const {book} = this.props;
    // check for existing cover image, load placeholder if necessary
    let bookImage;
    if (book.imageLinks) {
      bookImage = book.imageLinks.thumbnail;
    } else {
      bookImage =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Book_question2.svg/200px-Book_question2.svg.png';
    }
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url('${bookImage}')`
            }}
          />
          <ShelfBook
            onChangeShelf={this.props.onChangeShelf}
            book={this.props.book}
            shelf={this.props.shelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
