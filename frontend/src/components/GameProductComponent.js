import React from 'react'

function GameProductComponent({ product }) {
  return (
    <div className='game-product-section'>
        <span>{ product.name }</span>
        <div className='product-images'>
            <img src={product.images.url1} />
            <img src={product.images.url2} />
            <img src={product.images.url3} />
            <img src={product.images.url4} />
        </div>
        <a href='#'>{product.text}</a>
    </div>
  )
}

export default GameProductComponent