import React, { useEffect, useState } from 'react'

const FormProgress = (props) => {
    // const [step, setStep] = useState(0)
    const [steps, setSteps] = useState([
        { id: 1, type: "From", current: false },
        { id: 2, type: "To", current: false },
        { id: 3, type: "Item List", current: false }
    ])
    useEffect(() => {
        setSteps(steps.map(({ id, type, current }) => (
            id == props.step + 1 ? { id, type, current: true } : { id, type, current: false }
        )));
        console.log(steps);
    }, [props.step]);

    return (
        <ul className='flex flex-nowrap'>
            {steps.map(({ id, type, current }) => <li className={`border h-full w-full text-center justify-center p-2 ${current ? 'bg-green-400' : 'bg-gray-400'} `} key={id}>{type}</li>)}

        </ul>
    )
}

export default FormProgress