import React from 'react';



class BookShelf extends React.Component {



	render() {
		return (

			<div className="bookshelf">

				<h2 className="bookshelf-title">{this.props.shelf}</h2>
				<div className="bookshelf-books">

					<ul className="books-grid">
						{this.props.filteredBooks.map((book, index) => 

							<li key={index}>

								<div className="book">		
									<div className="book-top">
										<div className="book-cover" style={ {width: 128, height: 170, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)} }>
											
										</div>
										<div className="book-shelf-changer">
											<select value={book.shelf} onChange={(evt) => this.props.updateShelf(book, evt)}>
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

		)
	}

}

export default BookShelf;