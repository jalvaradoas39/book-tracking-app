import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {



  render() {
    return (
      <div className="app">

        {this.state.showSearchPage ? (

          <div className="search-books">
            <h1>Inside search books</h1>
          </div>

        ) : (

          <div className="list-books">
            <h1>Inside list books</h1>
          </div>

        )}

      </div>
    )
  }

}


export default BooksApp
