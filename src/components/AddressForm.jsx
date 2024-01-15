import React, { useEffect, useState } from "react";

const AddressForm = ({ heading, form_type }) => {
  const form_name = `${form_type}_address`;
  const [formData, setFormData] = useState({
    city: "",
    street: "",
    floor: null,
    apartment: null,
    elevator: false,
  });

  const inputClass =
    "rounded w-full py-2 px-3 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline";

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem(form_name));
    data && setFormData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const handleInputChange = (event) => {
    let target = event.target;
    const name = target.name;
    if (target.type === "checkbox") {
      target = target.checked;
    } else {
      target = target.value;
    }
    const data = { ...formData, [name]: target };
    sessionStorage.setItem(form_name, JSON.stringify(data));
    setFormData(data);
  };

  return (
    <div className="m-auto w-full">
      <div className="mb-2 text-center font-[Poppins] text-2xl font-bold text-gray-700">
        {heading}
      </div>
      <div className="grid gap-y-2">
        <div className="h-[1px] w-full bg-zinc-400"> </div>
        <input
          placeholder="City"
          className={inputClass}
          onChange={handleInputChange}
          value={formData.city}
          type="text"
          id="city"
          name="city"
        />
        <input
          placeholder="Street"
          className={inputClass}
          onChange={handleInputChange}
          value={formData.street}
          type="text"
          id="street"
          name="street"
        />
        <input
          placeholder="Floor"
          className={inputClass}
          onChange={handleInputChange}
          value={formData.floor}
          type="number"
          id="floor"
          name="floor"
          min="0"
        />
        <input
          placeholder="Apartment, suite, Etc."
          className={inputClass}
          onChange={handleInputChange}
          value={formData.apartment}
          type="number"
          id="apartment"
          name="apartment"
          min="0"
        />
        <div className="flex flex-row gap-1">
          <input
            onChange={handleInputChange}
            checked={formData.elevator}
            type="checkbox"
            name="elevator"
            id="elevator "
          />
          <label
            for="elevator"
            className="text-md font-[Poppins] font-medium text-gray-700"
          >
            Elevator?
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
