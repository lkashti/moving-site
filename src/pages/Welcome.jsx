import React from 'react'
import CardContainer from '../components/CardContainer'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <CardContainer>
            <div className='text-center font-bold text-2xl mb-10 font-[Poppins] text-gray-700'>Welcome!</div>
            <div className='flex justify-evenly'>
                <Button><Link to='/service-pick'>New</Link> </Button>
                <Button>Existing </Button>
            </div>
        </CardContainer>
    )
}

export default Welcome