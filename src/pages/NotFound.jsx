import React, { useEffect } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => document.querySelector("nav").classList.add("hidden"), []);
  const goHome = () => {
    document.querySelector("nav").classList.remove("hidden");
    navigate("/moving-site");
  };
  return (
    <div className="flex flex-col items-center justify-evenly gap-y-5 overflow-auto text-gray-800">
      <div className="font-[Poppins] text-4xl">404</div>
      <div className="pb-2 text-2xl">Nothing to see here</div>
      <Button onClick={goHome}>Take me home</Button>
    </div>
  );
};

export default NotFound;
