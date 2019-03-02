import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



class HomePage extends React.Component {



	render() {
		return (

			<div className="list-books">

				<div className="list-books-title">
					<h1>BookTracking App</h1>
				</div>

				<div className="list-books-content">
					<BookShelf shelf="Currently Reading" 
							   books={ this.props.books.filter(book => book.shelf === 'currentlyReading') }
							   shelfHandler={this.props.shelfHandler} />

					<BookShelf shelf="Want to Read"
							   books={ this.props.books.filter(book => book.shelf === 'wantToRead') }
							   shelfHandler={this.props.shelfHandler} />

					<BookShelf shelf="Read" 
							   books={ this.props.books.filter(book => book.shelf === 'read') }
							   shelfHandler={this.props.shelfHandler} />
				</div>

				<div className="open-search">
					<Link to="/search">
						<button>Add a book</button>
					</Link>
				</div>

			</div>
			
		)
	}


}

export default HomePage;