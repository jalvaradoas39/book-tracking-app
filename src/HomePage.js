import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';



class HomePage extends React.Component {



	render() {
		return (
			// <h1>Rendering Home Page</h1>
			<div className="list-books">

				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>

				<div className="list-books-content">
					<BookShelf shelf="Currently Reading" />
					<BookShelf shelf="Want to Read" />
					<BookShelf shelf="Read" />
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