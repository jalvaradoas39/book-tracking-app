import React from "react";


const BookDisplay = (props) => {

    let coverImgURL = props.book.imageLinks
      ? props.book.imageLinks.smallThumbnail
      : "http://via.placeholder.com/128x190";


    return (
      <li>
        <div className="book">
          <div className="book-top">
            <img
              className="book-cover"
              src={coverImgURL}
              alt="Book Cover img"
            />
            <div className="book-shelf-changer">
              <select
                value={props.book.shelf}
                onChange={e => props.shelfHandler(props.book, e)}
              >
                <option value="none" disabled="disabled">
                  Move to...
                </option>
                <option value="currentlyReading">
                  Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.book.title}</div>

          <div className="book-authors">
            {props.book.authors ? props.book.authors.join(', ') : props.book.publisher}
          </div>
        </div>
      </li> 
    )

  }


export default BookDisplay;