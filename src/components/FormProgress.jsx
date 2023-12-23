import React, { useState } from 'react'

const FormProgress = (props) => {
    const [step, setStep] = useState(0)
    const steps = [
        { id: 1, "type": "From", current: true },
        { id: 2, "type": "To", current: false },
        { id: 3, "type": "Item List", current: false }
    ]

    return (
        <ul className='flex flex-nowrap'>
            {steps.map(step => <li className={`border h-full w-full text-center justify-center p-2 ${step.current?'bg-green-400':'bg-gray-400'} `} key={step.id}>{step.type}</li>)}

        </ul>
    )
}

export default FormProgress