import React from 'react'

const Art = ({ url }) => {
  
  return (
    <div className='bg-white'>
      <img
        className='h-60 w-auto rounded-lg'
        src={url}
        draggable={false}
      ></img>
    </div>

  )
}

export default Art