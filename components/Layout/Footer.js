import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-zinc-100 pt-10 pb-14">
      <div>
        <h3 className="text-xl md:text-2xl font-semibold text-center md:mx-80 mx-10 mb-7">
          Ready to grow your business? Start with Apex, become faster every
          second
        </h3>
        <div className="flex justify-center">
          <Link href='/'>
            <button className="bg-orange-400 text-sm px-4 p-2 whitespace-nowrap text-white rounded-md outline-none">
              Start Chatting Now
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:px-4 py-2.5 w-full mt-20 md:block hidden">
        <div className="container md:flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 cursor-pointer md:ml-0 ml-4">
              Apex
            </span>
          </Link>
          <div
            className="justify-between items-center flex"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  href="#"                >
                  <span
                    className="block py-2 pr-4 pl-3 hover:text-orange-500 cursor-pointer rounded md:p-0 dark:text-white"
                  >
                    Demos
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                >
                  <span
                    className="block py-2 pr-4 pl-3 hover:text-orange-500 cursor-pointer border-b border-gray-100 md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                >
                  <span
                    className="block py-2 pr-4 pl-3 hover:text-orange-500 cursor-pointer border-b border-gray-100 md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                >
                  <span
                    className="block py-2 pr-4 pl-3 hover:text-orange-500 cursor-pointer border-b border-gray-100 md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Pages
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                >
                  <span
                    className="block py-2 pr-4 pl-3 hover:text-orange-500 cursor-pointer border-b border-gray-100 md:border-0 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex md:8order-2 gap-4 text-orange-400 text-xl">
            <i className="fa fa-twitter cursor-pointer"></i>
            <i className="fa fa-facebook cursor-pointer"></i>
            <i className="fa fa-instagram cursor-pointer"></i>
            <i className="fa fa-github cursor-pointer"></i>
          </div>
        </div>
        <div className="border-t border-zinc-200 text-sm mx-10 mt-5 pt-5 flex justify-between text-zinc-500 gap-4 mx-20">
          <div className="whitespace-nowrap">© Copyright 2022, All Rights Reserved</div>
          <div className="flex justify-between gap-4">
            <span className="cursor-pointer hover:text-orange-500">Privacy Policy</span>
            <span className="cursor-pointer hover:text-orange-500">Terms & Conditions</span>
          </div>
        </div>
      </div>
      <div className="mt-8 md:hidden">
        <div className=" flex justify-center">
          <Link href="/" >
            <span className="text-2xl font-semibold whitespace-nowrap text-orange-500 cursor-pointer">
              Apex
            </span>
          </Link>
        </div>
        <div className="flex justify-between mx-4 text-sm mt-4 mb-3">
          <span className="cursor-pointer hover:text-orange-500">About</span>
          <span className="cursor-pointer hover:text-orange-500">Features</span>
          <span className="cursor-pointer hover:text-orange-500">Work</span>
          <span className="cursor-pointer hover:text-orange-500">Support</span>
        </div>
        <div className="flex justify-between mx-20 mt-7 text-orange-500 text-sm">
          <i className="fa fa-twitter cursor-pointer hover:text-orange-800"></i>
          <i className="fa fa-facebook cursor-pointer hover:text-orange-800"></i>
          <i className="fa fa-instagram cursor-pointer hover:text-orange-800"></i>
          <i className="fa fa-github cursor-pointer hover:text-orange-800"></i>
        </div>
        <div className="border-t border-zinc-300 mt-6 pt-4 mx-6">
          <div className="text-center text-zinc-500 text-xs">
            <div className="whitespace-nowrap">© Copyright 2022, All Rights Reserved</div>
            <div className="flex justify-between mt-5 mx-3">
              <span className="cursor-pointer hover:text-orange-500">Privacy Policy</span>
              <span className="cursor-pointer hover:text-orange-500">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
