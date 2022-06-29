import React from 'react'
import { pcProducts } from '../db/db'

function PopularProducts() {
  return (
    <div className='popular-product-section'>
        <span className='title'>Popular products in PC internationally</span>
        <div>
            {pcProducts.map(pcProduct => <img src={pcProduct.url} />)}
        </div>
    </div>
  )
}

export default PopularProducts