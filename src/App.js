import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './HomePage';
import SearchPage from './SearchPage';
import './App.css';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myReads: [],
      searchedBooks: []
    }

    this.updateShelf = this.updateShelf.bind(this);
  }


  componentDidMount() {
    BooksAPI.getAll().then(myReads => {
      this.setState({myReads})
    })
  }


  updateShelf(bookObj, selectTargetVal) {
    // console.log(this.state.myReads.filter(b => b.id === bookObj.id));
    // console.log(bookObj.id);
    // console.log(selectTargetVal);

    if (selectTargetVal === 'none') {
      this.setState(prevState => ({
        myReads: prevState.myReads.filter(prevBook => prevBook.id !== bookObj.id),
      }))
    }





  }


  render() {
    return (

      <BrowserRouter>
        <div className="app">
          
          <Route path="/" exact render={
            () => (
              <HomePage books={this.state.myReads}
                        updateShelf={this.updateShelf} />
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
