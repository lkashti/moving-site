import React from "react";

const Container = (props) => {
  return (
    <div
      className={` ${props.className ?? ""} md:min-w-[40vw] px-4`}
    >
      {props.children}
    </div>
  );
};

export default Container;
