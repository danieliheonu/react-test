import React from 'react'

function BackToTopComponent() {
  return (
    <div className='back-to-top-section'>
        <a href='#' onClick={() => window.scrollTo(0, 0)}>Back to top</a>
    </div>
  )
}

export default BackToTopComponent