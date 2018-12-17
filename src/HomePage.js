import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



class HomePage extends React.Component {



	render() {
		return (

			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">
					<BookShelf shelf="Currently Reading" 
							   filteredBooks={ this.props.myReads.filter(book => book.shelf === 'currentlyReading') }
							   updateShelf={this.props.updateShelf} />

					<BookShelf shelf="Want to Read"
							   filteredBooks={ this.props.myReads.filter(book => book.shelf === 'wantToRead') }
							   updateShelf={this.props.updateShelf} />

					<BookShelf shelf="Read" 
							   filteredBooks={ this.props.myReads.filter(book => book.shelf === 'read') }
							   updateShelf={this.props.updateShelf} />
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