import React from 'react'

const Button = ({type, title}) => {
  return (
    <>
      <button 
      className='rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-red-600'
      type={type}>{title}</button>
    </>
  )
}

export default Button
