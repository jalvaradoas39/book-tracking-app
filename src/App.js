import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import './App.css';



class App extends React.Component {

  state = {
    myReads: [],
    searchedBooks: []
  }


  componentDidMount() {
    BooksAPI.getAll().then(myReads => {
      this.setState({myReads})
    })
  }



  render() {
    return (
      <BrowserRouter>
        <div className="app">
          
          <Route path="/" exact render={
            () => (
              <HomePage />
            )
          }></Route>

          <Route path="/search" render={
            () => (
              <SearchPage />
            )
          }></Route>

        </div>
      </BrowserRouter>
    )
  }


}


export default App
