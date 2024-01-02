import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={` ${props.className} rounded bg-indigo-600 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-indigo-400`}
    >
      {props.children}
    </button>
  );
};

export default Button;
