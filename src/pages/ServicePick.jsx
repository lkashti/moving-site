import React from 'react'
import Button from '../components/Button'
import CardContainer from '../components/CardContainer'
import { Link } from 'react-router-dom'

const ServicePick = () => {
  return (
    <CardContainer>
            <div className='text-center font-bold text-2xl mb-10 font-[Poppins] text-gray-700'>Hi user!<br></br>I need...</div>
            <div className='grid gap-5 grid-cols-2 grid-rows-2'>
                <Button>A Storage Unit</Button>
                <Button> <Link to='/transportation-order'> Moving Service</Link></Button>
                <Button>Boxes</Button>
                <Button>Placeholder</Button>
            </div>
    </CardContainer>
  )
}

export default ServicePick