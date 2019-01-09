import React, { Component } from "react";
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';


class App extends Component {
  state = {
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books: books});
    });
  }

  shelfHandler = (book, evt) => {
    return new Promise(resolve => {
      BooksAPI.update(book, evt.target.value).then(res => {
        BooksAPI.getAll().then(res => {
          this.setState({books: res}, resolve(res));
        });
      });
    });
  }


  render() {


    return (
      <BrowserRouter>
        <div className="app">
          
          <Route path="/" exact render={
            () => (
              <HomePage books={this.state.books}
                        shelfHandler={this.shelfHandler} />
            )
          }></Route>

          <Route path="/search" render={
            () => (
              <SearchPage searchedBooks={this.state.books}
                          shelfHandler={this.shelfHandler} />
            )
          }></Route>

        </div>
      </BrowserRouter>
    )
  }

}


export default App;