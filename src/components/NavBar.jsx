import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const NavBar = () => {
  const links = [
    { name: "SERVICES", link: "" },
    { name: "BUSINESS", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="px-4 py-3 shadow-md md:px-[15%]">
      <div className="items-center justify-between md:flex">
        <div className="flex cursor-pointer items-center font-[Poppins] font-semibold text-gray-700 md:text-3xl">
          <span className="mt-1 pr-2 text-zinc-500">
            <ion-icon name="business-outline"></ion-icon>
          </span>
          <Link to="/moving-site">Moving</Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-3 cursor-pointer text-3xl md:hidden "
        >
          <ion-icon name={open ? "close" : "menu-outline"}></ion-icon>
        </div>
        <ul
          className={`absolute left-0 -z-10 h-full w-full pl-7 transition-all duration-200 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:p-0 md:opacity-100 ${
            open ? "z-10 bg-zinc-200 opacity-100" : "top-[-50vh] opacity-0"
          }`}
        >
          {links.map((link) => (
            <li
              key={link.name}
              className="my-7 font-[Poppins] text-xl font-semibold md:mx-4 md:my-0"
            >
              <a
                href={link.link}
                className="text-gray-700 duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button className="md:hidden">Sign Up</Button>
        </ul>
        <Button className="hidden md:flex">Sign Up</Button>
      </div>
    </nav>
  );
};

export default NavBar;
