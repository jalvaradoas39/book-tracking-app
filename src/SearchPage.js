import React from 'react';
import { Link } from 'react-router-dom';
import { search } from './BooksAPI';
import BookDisplay from './BookDisplay';


class SearchPage extends React.Component {
	state = {
		searchResults: [],
		query: ""
	}

	inputHandler = (evt) => {
		let queryStr = evt.target.value;
		this.setState({query: queryStr});
		if (queryStr.length === 0) {
			this.setState({searchResults: []});
		} else {
			search(queryStr).then(searchResponse => {
				const items = searchResponse.error ? [] : searchResponse;
				this.setState({searchResults: items});
			});
		}
	};


	render() {
		const processedBooks = this.state.searchResults.map(book => {
			const found = this.props.searchedBooks.find(myBook => myBook.id === book.id);
			book.shelf = found ? found.shelf : "none";
			return book;
		});


		return (
			<div className="search-books">
				
				<div className="search-books-bar">
					<Link to="/">
						<button className="close-search">Close</button>
					</Link>
					<div className="search-books-input-wrapper">
						<input type="text"
							   value={this.state.query}
							   placeholder="Search by title or categories"
							   onChange={this.inputHandler} />
					</div>
				</div>

				<div className="search-books-results">
					{processedBooks.length > 0 ? (
						<ol className="books-grid">
							{processedBooks.map((book, index) => (
								<BookDisplay
									key={book.id}
									book={book}
									shelfHandler={this.props.shelfHandler}
								/>
							))}
						</ol>

					): (
						<div className="no-results">
							No results to show, try some other keywords
						</div>
					)}
				</div>

			</div>
		)
	}

}

export default SearchPage;