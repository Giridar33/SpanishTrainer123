import React from 'react'

export default function MobileTenses({ toggleAllVerbOptions }) {
  return (
    <div className='mobile-tenses'>
      <h2 onClick={toggleAllVerbOptions}>Present Tense</h2>
    </div>
  )
}
