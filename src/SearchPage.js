import React from 'react';
import { Link } from 'react-router-dom';



class SearchPage extends React.Component {



render() {
	return (
		// <h1>Rendering Search Page</h1>
		<div className="search-books">
			
			<div className="search-books-bar">
				<Link to="/">
					<button className="close-search">Close</button>
				</Link>
			</div>

			<div className="search-books-results">
				
			</div>

		</div>
	)
}


}

export default SearchPage;