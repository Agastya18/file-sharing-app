"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={`flex w-full items-center  bg-gray-900  border-gray-500 border-b-2 `}>
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5 md:ml-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={90}
                height={90}
              />
              
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden bg-blue-400`}
              >
                <span className=" bg-black relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                <span className=" bg-black relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
                <span className="bg-black relative my-[6px] block h-[2px] w-[30px] bg-body-color "></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg  bg-slate-800  px-6 py-5 shadow  lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                } `}
              >
                <ul className="block lg:flex md:ml-7 text-white ">
                    <li className="mb-4 lg:mb-0 ">
                        <Link
                        href="/#"
                        className="block py-2 text-base font-medium text-dark hover:text-primary  "
                        >
                        Home
                        </Link>
                    </li>
                    <li className="mb-4 lg:mb-0 md:ml-7">
                        <Link
                        href="/#"
                        className="block py-2 text-base font-medium text-dark hover:text-primary "
                        >
                        Upload
                        </Link>
                    </li>
                    <li className="mb-4 lg:mb-0 md:ml-7">
                        <Link
                        href="/#"
                        className="block py-2 text-base font-medium text-dark hover:text-primary"
                        >
                        Pricing
                        </Link>
                    </li>
                  
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                href="/#"
                className="px-7 py-3 text-base font-medium text-dark hover:text-primary bg-blue-400 rounded-md  "
              >
                Sign in
              </Link>

              <Link
                href="/#"
                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-black hover:bg-primary/90 bg-blue-400 md:ml-7 "
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


