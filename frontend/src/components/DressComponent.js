import React from 'react'

function DressComponent({ item }) {
  return (
    <div className='game-product-section dress-section'>
        <span>{item.name}</span>
        <div>
            <img src={item.url} />
        </div>
        <a href='#'>{item.text}</a>
    </div>
  )
}

export default DressComponent