import React, {Component} from 'react';
import BookShelf from './Bookshelf';

const ListBooks = props => {
  const filterByShelf = shelf => {
    const allBooks = props.books;
    return allBooks.filter(book => book.shelf === shelf);
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf
          title={'Currently Reading'}
          shelvedBooks={filterByShelf('currentlyReading')}
          onChangeShelf={props.onChangeShelf}
        />
        <BookShelf
          title={'Want to Read'}
          shelvedBooks={filterByShelf('wantToRead')}
          onChangeShelf={props.onChangeShelf}
        />
        <BookShelf
          title={'Read'}
          shelvedBooks={filterByShelf('read')}
          onChangeShelf={props.onChangeShelf}
        />
      </div>
    </div>
  );
};

export default ListBooks;
