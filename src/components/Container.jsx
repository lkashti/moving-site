import React from "react";

const Container = ({ className, children }) => {
  return (
    <div className={` ${className ?? ""} px-4 md:min-w-[40vw]`}>{children}</div>
  );
};

export default Container;
