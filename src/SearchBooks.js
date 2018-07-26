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
  // Update query and look for matching books
  // question: should maybe be split up into two functions? Should performSearch rather be located in App.js?
  performSearch = query => {
    this.setState({query});
    if (this.state.query) {
      BooksAPI.search(this.state.query).then(books => {
        this.setState({books});
      });
    }
  };

  render() {
    let showingBooks;

    // check if the array of the search results wasn't empty
    if (Array.isArray(this.state.books) && this.state.query !== '') {
      let booksOnShelf = this.props.books;
      let foundBooks = this.state.books;

      // map over the found books
      showingBooks = foundBooks.map(book => {
        const bookInCollection = booksOnShelf.find(b => b.id === book.id); //check if the book is already shelved
        if (bookInCollection) {
          book.shelf = bookInCollection.shelf; // if yes, assign the found book the shelf from the one already in the collection
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
              onChange={event => this.performSearch(event.target.value)}
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
