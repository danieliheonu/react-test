import React from 'react'
import { Icon } from '@iconify/react';

function Header() {
  return (
    <nav className='header-nav'>
        <img src="https://www.freeiconspng.com/uploads/amazon-black-icon-16.png" />
        <div className='location'>
            <Icon icon="akar-icons:location" />
            <span>Deliver to <br /><span className='location-text'>Nigeria</span></span>
        </div>
        <form className='search-bar'>
            <input type='text' />
            <button type='submit'><Icon icon="bx:search-alt-2" className='search-icon' /></button>
        </form>
        <Icon className='nigeria-flag' icon="openmoji:flag-nigeria" />
        <span className='sign-in'>Hello, Sign In <br /><span className='account-list'>Account & Lists</span></span>
        <span className='return-orders'>Returns <br /><span className='orders'>& Orders</span></span>
        <div className='cart'>
            <Icon className='cart-icon' icon="mdi:cart-variant" />
            <span>0</span>
        </div>
    </nav>
  )
}

export default Header