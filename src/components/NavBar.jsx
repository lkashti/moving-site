import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import Container from "./Container";

const NavBar = () => {
  const links = [
    { name: "SERVICES", link: "" },
    { name: "BUSINESS", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md">
      <Container>
        <div className="items-center justify-between px-2 py-3 md:flex md:px-0 ">
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
            className={`absolute left-0 -z-10 h-full w-fullpl-7 transition-all duration-200 ease-linear md:static md:z-auto md:flex md:w-auto md:items-center md:p-0 md:opacity-100 ${
              open ? "top-12 z-10 opacity-100" : "top-[-490px] opacity-0"
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
      </Container>
    </div>
  );
};

export default NavBar;
