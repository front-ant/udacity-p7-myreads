import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import escapeRegExp from 'escape-string-regexp';
import Book from './Book';
import * as BooksAPI from './BooksAPI';

class SearchBooks extends Component {
  state = {
    query: '',
    books: []
  };

  updateQuery = query => {
    this.setState({query});
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(books => {
        this.setState({books});
      });
    }
  };

  render() {
    let showingBooks;
    if (Array.isArray(this.state.books) && this.state.query !== '') {
      let booksOnShelf = this.props.books;
      let foundBooks = this.state.books;
      showingBooks = foundBooks.map(book => {
        const bookInCollection = booksOnShelf.find(b => b.id === book.id);
        if (bookInCollection) {
          book.shelf = bookInCollection.shelf;
        } else {
          book.shelf = 'none';
        }
        return book;
      });
    } else {
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
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map(book => (
              <li key={book.id}>
                <Book
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
