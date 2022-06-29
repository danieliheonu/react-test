import React from 'react'

function Menu() {
  return (
    <div className='menu-section'>
        <a href='#' className='burger-menu'>
            <div className='menu'>
                <div className='rectangle'></div>
                <div className='rectangle'></div>
                <div className='rectangle'></div>
            </div>
            <span>All</span>
        </a>
        <a href='#'>Today's Deals</a>
        <a href='#'>Customer Service</a>
        <a href='#'>Registry</a>
        <a href='#'>Gift Cards</a>
        <a href='#'>Sell</a>
    </div>
  )
}

export default Menu