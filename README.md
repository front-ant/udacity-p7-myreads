# MyReads Project

Displayed here are all the React skills I have at the moment, finishing off this section of my Udacity Front End Developer programme. This app is a "Goodreads" clone that lets you categorize books into different bookshelves. A search function works with the provided backend and accepts a limited number of search requests.

It is possible to categorize books straight from the search function. Books that were already part of the collection are displayed there as well but will have their shelf marked accordingly.

## Running the app:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- your favorite browser should open on `localhost:3000` and show the app

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Ideas for Future Features

- Create custom bookshelves
- Rate books
- Change bookshelves by dragging and dropping books
