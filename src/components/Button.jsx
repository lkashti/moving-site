import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type} onClick={props.onClick} className={` ${props.className} bg-indigo-600 text-white rounded py-2 px-6 font-[Poppins] hover:bg-indigo-400 duration-500`}>{props.children}</button>
  )
}

export default Button