import React, {Component} from 'react';
import Book from './Book';

class BookShelf extends Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid" />
            {this.props.shelvedBooks.map(book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  image={book.imageLinks.thumbnail}
                  id={book.id}
                />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default BookShelf;
