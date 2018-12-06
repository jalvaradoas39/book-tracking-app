import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'


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
      <div className="app">
        
      </div>
    )
  }


}


export default App
