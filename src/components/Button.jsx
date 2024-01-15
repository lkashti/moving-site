import React from "react";

const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${className} rounded bg-blue-400 p-0 px-6 py-2 font-[Poppins] text-white duration-500 hover:bg-blue-300`}
    >
      {children}
    </button>
  );
};

export default Button;
