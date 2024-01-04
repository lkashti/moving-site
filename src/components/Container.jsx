import React from "react";

const Container = (props) => {
  return (
    <div className={` ${props.className} md:px-auto mx-auto max-w-7xl px-4`}>
      {props.children}
    </div>
  );
};

export default Container;
