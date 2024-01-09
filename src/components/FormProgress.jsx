import React, { useEffect, useState } from "react";

const FormProgress = (props) => {
  // const [step, setStep] = useState(0)
  const [steps, setSteps] = useState([
    { type: "Source Address", current: false },
    { type: "Target Address", current: false },
    { type: "Insert your items", current: false },
  ]);
  useEffect(() => {
    setSteps(
      steps.map(({ type, _ }, index) =>
        index <= props.step
          ? { type, current: true }
          : { type, current: false },
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.step]);

  return (
    <ul className="mx-auto flex max-w-max flex-nowrap rounded">
      {steps.map(({ type, current }, index) => (
        <li
          className={`text-xl text-slate-200 py-2 px-3 justify-center text-center  font-[Poppins] opacity-80 shadow ring-1 ring-gray-800 ring-opacity-10 ${
            current ? "bg-blue-500" : "bg-gray-700"
          } ${index === 0 && "rounded-s-md"} ${
            index === steps.length - 1 && "rounded-e-md"
          }`}
          key={index}
        >
          {type}
        </li>
      ))}
    </ul>
  );
};

export default FormProgress;
