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
        <a href='#today-deals'>Today's Deals</a>
        <a href='#customer-service'>Customer Service</a>
        <a href='#registry'>Registry</a>
        <a href='#gift-cards'>Gift Cards</a>
        <a href='#sell'>Sell</a>
    </div>
  )
}

export default Menu