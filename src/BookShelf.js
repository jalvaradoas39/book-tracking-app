import React from 'react';



class BookShelf extends React.Component {



	render() {
		return (

			<div className="bookshelf">

				<h2 className="bookshelf-title">{this.props.shelf}</h2>
				<div className="bookshelf-books">

					<ul className="books-grid">
						{this.props.books.map((book, index) => 

							<li key={index}>
								<div className="book-top">
									<div className="book-cover" style={ {width: 128, height: 170, backgroundImage: book.imageLinks ? (`url(${book.imageLinks.thumbnail})`) : (`url(https://dummyimage.com/128x170/4f4f4f/ffffff.jpg&text=No+Book+Art)`)} }>
										
									</div>
									<div className="book-shelf-changer">
										<select>
											<option>Move to...</option>
											<option>Currently Reading</option>
											<option>Want to Read</option>
											<option>Read</option>
											<option>None</option>
										</select>
									</div>
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