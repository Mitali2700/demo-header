import React from 'react'

const Button = (props) => {
  return (
    <button class="bg-blue-900 hover:bg-blue-500 text-white font-bold py-2 px-6 border border-blue-700 rounded duration-500 mr-2">
        {props.children}
    </button>
  )
}

export default Button