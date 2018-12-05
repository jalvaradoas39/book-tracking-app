import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksApp extends React.Component {

  state = {
    showSearchPage: false
  }



  render() {
    return (
      <div className="app">

        {this.state.showSearchPage ? (

          <div className="search-books">
            <h1>Inside search books</h1>
          </div>

        ) : (

          <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>

            <div className="list-books-content">
              <div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                </div>

                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                </div>   

              </div>
            </div>

            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>

          </div>

        )}

      </div>
    )
  }

}


export default BooksApp
