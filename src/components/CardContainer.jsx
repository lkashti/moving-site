import React from 'react'

const CardContainer = (props) => {
  return (
    <div className='flex flex-col justify-evenly mt-20 px-6 py-8 shadow-md rounded-md h-full bg-slate-100 w-full max-w-[22rem]'>
        {props.children}
    </div>
  )
}

export default CardContainer