import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import Book from './Book';
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  };


onSearchInput = event => {
  this.setState({query: event.target.value});
  if (this.state.query) {
  BooksAPI.search(this.state.query)
  .then((newBooks) => {
    this.setState({books: newBooks});
    console.log(this.state.query)
    console.log(this.state.books);
  })
}
}


  render() {
    let showingBooks;
    if (this.state.books.length > 0) {
      showingBooks = this.state.books;
    }
    else {
      showingBooks = [];
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.onSearchInput}
              value={this.state.query}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  image={book.imageLinks.thumbnail}
                  book={book}
                  onChangeShelf={this.props.onChangeShelf}
                  shelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default SearchBooks;
