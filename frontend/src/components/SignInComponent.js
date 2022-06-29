import React from 'react'

function SignInComponent() {
  return (
    <div className='sign-in-section'>
        <div>
            <hr />
            <span className='text'>See personalized recommendations</span>
            <a href='#' className='button'>Sign in</a>
            <span className='register'>New customer? <a href='#'>Start here.</a></span>
            <hr className='bottom' />
        </div>
    </div>
  )
}

export default SignInComponent