import React from 'react'

const AddressForm = () => {
  return (
    <>
      <div className='text-center font-bold text-2xl mb-2 font-[Poppins] text-gray-800'>From?</div>
      <div className='text-center font-bold text-xl mb-5 font-[Poppins] text-gray-800'>Loading address:</div>
      <div className='grid gap-y-2'>
        <div className='flex items-center justify-between'>
          <label for='city' className='text-gray-700 text-sm font-bold'>City</label>
          <input className=' border-blue-400 border rounded py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline' type="text" id="city" />
        </div>
        <div className='flex items-center justify-between'>
          <label for='street' className='text-gray-700 text-sm font-bold'>Street</label>
          <input className=' border-blue-400 border rounded py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline' type="text" id="stree" />
        </div>
        <div className='flex items-center justify-between'>
          <label for='floor' className='text-gray-700 text-sm font-bold'>Floor</label>
          <input className=' border-blue-400 border rounded py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline' type="text" id="city" />
        </div>
        <div className='flex items-center'>
          <label for='elevator' className='text-gray-700 text-sm font-bold mr-2'>Elevator?</label>
          <input type="checkbox" id="elevator" />
        </div>
      </div>
    </>
  )
}

export default AddressForm