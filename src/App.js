import React from 'react';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';




function HomePage(props) {

  return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <BookShelf shelf="Currently Reading" 
                 filteredBooks={ props.myReads.filter(book => book.shelf === 'currentlyReading') }
                 updateShelf={props.updateShelf} />

          <BookShelf shelf="Want to Read"
                 filteredBooks={ props.myReads.filter(book => book.shelf === 'wantToRead') }
                 updateShelf={props.updateShelf} />

          <BookShelf shelf="Read" 
                 filteredBooks={ props.myReads.filter(book => book.shelf === 'read') }
                 updateShelf={props.updateShelf} />
        </div>

        <div className="open-search">
          <Link to="/search">
            <button>Add a book</button>
          </Link>
        </div>

      </div>
  );

}



function BookShelf(props) {

  return (
      <div className="bookshelf">

        <h2 className="bookshelf-title">{props.shelf}</h2>
        <div className="bookshelf-books">

          <ul className="books-grid">
            {props.filteredBooks.map((book, index) => 

              <li key={index}>

                <div className="book">    
                  <div className="book-top">
                    <div className="book-cover" style={ {width: 128, height: 170, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)} }>
                      
                    </div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(evt) => props.updateShelf(book, evt)}>
                        <option disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>

                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors.join(', ')}</div>
                </div>
              </li>

            )}
          </ul>

        </div>

      </div>
  );

}




function SearchPage(props) {

  return (
    <div className="search-books">
      
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search">Close</button>
        </Link>
      </div>

      <div className="search-books-results">
        
      </div>

    </div>

    //<form action="" id="directory-filters">
      //<p>Filters go here</p>
    //</form>
  );

}





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



  updateShelf = (book, evt) => {
    return new Promise(resolve => {
      BooksAPI.update(book, evt.target.value).then(res => {
        BooksAPI.getAll().then(res => {
          this.setState(
            {
              myReads: res
            },
            resolve(res)
          );
        });
      });
    });
  };



  render() {
    return (

      <BrowserRouter>
        <div className="app">
          
          <Route path="/" exact render={
            () => (
              <HomePage myReads={this.state.myReads}
                        updateShelf={this.updateShelf} />
            )
          }></Route>

          <Route path="/search" render={
            () => (
              <SearchPage searchedBooks={this.state.searchedBooks} />
            )
          }></Route>

        </div>
      </BrowserRouter>

    )
  }


}


export default App
