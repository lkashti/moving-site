import React from "react";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={` ${props.className} p-0 rounded bg-blue-400 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-blue-300`}
    >
      {props.children}
    </button>
  );
};

export default Button;
