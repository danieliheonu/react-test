import React from 'react'
import GameProductComponent from './GameProductComponent'
import { products, items } from '../db/db'
import DressComponent from './DressComponent'
import PopularProducts from './PopularProducts'
import BookComponent from './BookComponent'
import SignInComponent from './SignInComponent'
import BackToTopComponent from './BackToTopComponent'


function Products() {
  return (
    <div className='products'>
      {products.map(product => <GameProductComponent key={product.id} product={product} />)}
      {items.map(item => <DressComponent key={item.id} item={item} />)}
      <PopularProducts />
      <BookComponent />
      <SignInComponent />
      <BackToTopComponent />
    </div>
  )
}

export default Products