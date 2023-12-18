import React from 'react'

const CardContainer = (props) => {
  return (
    <div className='flex flex-col justify-evenly mt-20 px-6 py-8 shadow-md rounded-xl h-screen max-h-96 bg-slate-100 w-full max-w-sm'>
        {props.children}
    </div>
  )
}

export default CardContainer