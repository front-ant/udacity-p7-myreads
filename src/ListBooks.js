import React, {Component} from 'react';
import BookShelf from './Bookshelf';

class ListBooks extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf title={'Currently Reading'} />
          <BookShelf title={'Wanto to Read'} />
          <BookShelf title={'Read'} />
        </div>
      </div>
    );
  }
}
export default ListBooks;
