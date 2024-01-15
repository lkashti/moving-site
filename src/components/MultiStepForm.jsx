import React, { useState } from "react";
import AddressForm from "./AddressForm";
import Button from "./Button";
import FormProgress from "./FormProgress";
import ItemTable from "./ItemTable";

const MultiStepForm = () => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <>
      <form className="flex flex-col gap-1" onSubmit={handleSubmit}>
        {step === 0 && (
          <AddressForm
            form_type="source"
            heading="Where should we pick up your items from?"
            subheading=""
          ></AddressForm>
        )}
        {step === 1 && (
          <AddressForm
            form_type="target"
            heading="Where should we unload your items at?"
            subheading=""
          ></AddressForm>
        )}
        {step === 2 && <ItemTable></ItemTable>}
        <br />
        <div id="form-controls" className="flex justify-end">
          {step > 0 && (
            <Button className="mr-auto block" onClick={handlePrevious}>
              Previous
            </Button>
          )}
          {step < 2 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <input
              className="rounded bg-green-500 px-6 py-2 font-[Poppins] text-white duration-200 hover:bg-green-400"
              type="submit"
              value="Submit"
            />
          )}
        </div>
        <br />
        <FormProgress step={step}></FormProgress>
      </form>
    </>
  );
};

export default MultiStepForm;
