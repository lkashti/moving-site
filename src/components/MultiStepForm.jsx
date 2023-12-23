import React, { useState } from 'react'
import AddressForm from './AddressForm';
import Button from './Button';
import FormProgress from './FormProgress';

const MultiStepForm = () => {
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState({})

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrevious = () => {
        setStep(step - 1);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                {step == 0 && (
                    <AddressForm></AddressForm>
                )}
                <br />
                <div className='flex gap-x-2'>
                    {step > 0 && (
                        <Button onClick={handlePrevious}>Previous</Button>
                    )}
                    {step < 2 ? (
                        <Button onClick={handleNext}>Next</Button>
                    ) : (
                        <Button type='submit'>Submit</Button>
                    )}
                </div>
                <br />
                <FormProgress step={step}></FormProgress>
            </form>
        </div>
    )
}

export default MultiStepForm