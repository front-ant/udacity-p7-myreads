import React, {Component} from 'react';
import Book from './Book';

function BookShelf(props) {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.shelvedBooks.map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  onChangeShelf={props.onChangeShelf}
                  shelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default BookShelf;
