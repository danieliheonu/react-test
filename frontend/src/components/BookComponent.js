import React from 'react'
import { books } from '../db/db'

function BookComponent() {
  return (
    <div><div className='popular-product-section book-section'>
    <span className='title'>Top Sellers in Books for you</span>
    <div>
        {books.map(book => <img src={book.url} />)}
    </div>
</div></div>
  )
}

export default BookComponent