import React from "react";

const AddressForm = (props) => {
  const inputClass =
    "border-blue-400 border rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline";
  return (
    <>
      <div className="mb-2 text-center font-[Poppins] text-2xl font-bold text-gray-700">
        {props.heading}
      </div>
      <div className="grid gap-y-2">
        <span className="">Home Adress</span>
        <div className="flex items-center justify-between">
          <input
            placeholder="City"
            className={inputClass}
            type="text"
            id="city"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            placeholder="Street"
            className={inputClass}
            type="text"
            id="stree"
          />
        </div>
        <div className="flex items-center justify-between">
          <input
            placeholder="Floor"
            className={inputClass}
            type="text"
            id="city"
          />
        </div>
        <div className="flex items-center gap-2">
          <label for="elevator" className="text-gray-700">
            Elevator?
          </label>
          <input type="checkbox" id="elevator" />
        </div>
      </div>
    </>
  );
};

export default AddressForm;
