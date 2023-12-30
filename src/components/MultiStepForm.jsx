import React, { useState } from 'react'
import AddressForm from './AddressForm';
import Button from './Button';
import FormProgress from './FormProgress';
import ItemTable from './ItemTable';

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
        <>
            <form className='flex flex-col justify-between' onSubmit={handleSubmit}>
                {step === 0 && (
                    <AddressForm heading="Where should we pick up your items from?" subheading=""></AddressForm>
                )}
                {step === 1 && (
                    <AddressForm heading="Where should we unload your items at?" subheading=""></AddressForm>
                )}
                {step === 2 && (
                    <ItemTable></ItemTable>
                )}
                <br />
                <div className='flex justify-end'>
                    {step > 0 && (
                        <Button className='block mr-auto' onClick={handlePrevious}>Previous</Button>
                    )}
                    {step < 2 ? (
                        <Button onClick={handleNext}>Next</Button>
                    ) : (
                        <input className='bg-green-500 text-white rounded py-2 px-6 font-[Poppins] hover:bg-green-400 duration-200' type='submit' value='Submit'/>
                    )}
                </div>
                <br />
                <FormProgress step={step}></FormProgress>
            </form>
        </>
    )
}

export default MultiStepForm