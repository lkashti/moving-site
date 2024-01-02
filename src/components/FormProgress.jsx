import React, { useEffect, useState } from 'react'

const FormProgress = (props) => {
    // const [step, setStep] = useState(0)
    const [steps, setSteps] = useState([
        { type: "From", current: false },
        { type: "To", current: false },
        { type: "Item List", current: false }
    ])
    useEffect(() => {
        setSteps(steps.map(({ type, _ }, index) => (
            index <= props.step ? { type, current: true } : { type, current: false }
        )));
        console.log(steps);
    }, [props.step]);

    return (
        <ul className='flex flex-nowrap rounded gap-2'>
            {steps.map(({ type, current }, index) =>
                <li className={`h-full w-full text-center font-bold opacity-80 text-md justify-center p-2 ${current ? 'bg-green-400' : 'bg-slate-200'} ${index == 0 && 'rounded-s-lg'} ${index == steps.length - 1 && 'rounded-e-lg'}`} key={index}>{type}</li>)}

        </ul>
    )
}

export default FormProgress