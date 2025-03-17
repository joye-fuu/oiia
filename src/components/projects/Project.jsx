import React from 'react'

const Project = ({projName, desc, imgUrl, modalToggle}) => {

  return (
    <div
      className='bg-blue-400 shadow-lg rounded-sm size-70 p-5 flex flex-col cursor-pointer items-center hover:bg-blue-500'
      onClick={modalToggle}
    >
      <img
        src={imgUrl}
        className='rounded-sm size-40'
      ></img>
      <p className='text-lg'>
        {projName}
      </p>
      <p className='text-xs text-gray-700'>
        {desc}
      </p>
    </div>
  )
}

export default Project