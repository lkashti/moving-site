import React from "react";

const CardContainer = (props) => {
  return (
    <div className="flex h-screen w-5/6 flex-col justify-center md:max-w-3xl">
      {props.children}
    </div>
  );
};

export default CardContainer;
