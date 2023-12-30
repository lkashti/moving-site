import React from 'react'

const CardContainer = (props) => {
  return (
    <div className='flex flex-col justify-center h-screen w-5/6 md:max-w-3xl'>
        {props.children}
    </div>
  )
}

export default CardContainer