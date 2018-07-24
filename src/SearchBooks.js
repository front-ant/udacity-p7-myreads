import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import Book from './Book';
import ShelfBook from './ShelfBook'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  state = {
    query: '',
    books: this.props.books
  };

  updateQuery = query => {
    this.setState({query: query.trim()});
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books});
    });
  }

  render() {
    let foundBooks;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      foundBooks = this.props.books.filter((book => match.test(book.title)))
    }
    else {
      foundBooks = this.props.books;
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to={'/'}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
        NOTES: The search from BooksAPI is limited to a particular set of search terms.
        You can find these search terms here:
        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
        you don't find a specific author or title. Every search is limited by search terms.
      */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => {
                this.updateQuery(event.target.value);
                BooksAPI.search(this.state.query)
                .then(() => {
                  console.log(this.state.query);
                });
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {foundBooks.map(book => (
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
