import React, { useState } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const NavBar = () => {
    let Links = [
        { name: "SERVICES", link: "" },
        { name: "BUSINESS", link: "" },
        { name: "ABOUT", link: "" },
        { name: "CONTACT", link: "" },
    ]
    let [open, setOpen] = useState(false)
    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-slate-200 bg-opacity-50 py-3 md:px-10 px-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-700'>
                    <span className='pt-1 text-indigo-500 mr-1'>
                        <ion-icon name="business-outline"></ion-icon>
                    </span>
                    <Link to='/moving-site'>Moving</Link>
                </div>
                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-4 cursor-pointer md:hidden '>
                    <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in ${open ? 'top-16 opacity-100' : 'top-[-490px] opacity-0'} md:opacity-100  `}>
                    {
                        Links.map(link =>
                            <li key={link.name} className='md:mx-4 text-xl md:my-0 my-7'>
                                <a href={link.link} className='text-gray-700 hover:text-gray-400 duration-500'>{link.name}</a>
                            </li>
                        )
                    }
                    <Button>Sign Up</Button>
                </ul>
            </div>
        </div>
    )
}

export default NavBar