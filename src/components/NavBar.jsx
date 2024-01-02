import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "SERVICES", link: "" },
    { name: "BUSINESS", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 w-full shadow-md">
      <div className="items-center justify-between bg-slate-200 bg-opacity-50 px-7 py-3 md:flex md:px-10">
        <div className="flex cursor-pointer items-center font-[Poppins] text-2xl font-bold text-gray-700">
          <span className="mr-1 pt-1 text-indigo-500">
            <ion-icon name="business-outline"></ion-icon>
          </span>
          <Link to="/moving-site">Moving</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-4 cursor-pointer text-3xl md:hidden "
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full pb-12 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto  md:items-center md:pb-0 md:pl-0 ${
            open ? "top-16 opacity-100" : "top-[-490px] opacity-0"
          } md:opacity-100  `}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 text-xl md:mx-4 md:my-0">
              <a
                href={link.link}
                className="text-gray-700 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Sign Up</Button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
