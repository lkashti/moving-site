import React from "react";

const AddressForm = (props) => {
  const inputClass =
    "rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline";
  return (
    <div className="m-auto w-full">
      <div className="mb-2 text-center font-[Poppins] text-2xl font-bold text-gray-700">
        {props.heading}
      </div>
      <div className="grid gap-y-2">
        <div className="h-[1px] w-full bg-zinc-400"> </div>
        <input
          placeholder="City"
          className={inputClass}
          type="text"
          id="city"
        />
        <input
          placeholder="Street"
          className={inputClass}
          type="text"
          id="street"
        />
        <input
          placeholder="Floor"
          className={inputClass}
          type="number"
          id="city"
          min="0"
        />
        <input
          placeholder="Apartment, suite, Etc."
          className={inputClass}
          type="number"
          id="city"
          min="0"
        />
        <div className="flex flex-row gap-1">
          <input type="checkbox" id="elevator " />
          <label for="elevator" className="text-gray-700 text-md font-medium font-[Poppins]">
            Elevator?
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
