import Link from "next/link";
import React from "react";

const SideBar = () => {
    return (
        <div className="md:hidden block w-2/3 fixed top-0 duration-300 pt-10 bg-gray-200 min-h-screen shadow-lg border-r border-gray-200 -inset-0">
            <ul className="grid grid-rows-4">
                <Link href="/"  >
                    <li className="w-full hover:bg-orange-600 hover:text-white duration-200 p-1 text-center mt-5 cursor-pointer">
                        Home
                    </li>
                </Link>
                <Link href="/">
                    <li className="w-full hover:bg-orange-600 hover:text-white duration-200 p-1 text-center mt-5 cursor-pointer">
                        About
                    </li>
                </Link>
                <Link href="/">
                    <li className="w-full hover:bg-orange-600 hover:text-white duration-200 p-1 text-center mt-5 cursor-pointer">
                        Services
                    </li>
                </Link>
                <Link href="/">
                    <li className="w-full hover:bg-orange-600 hover:text-white duration-200 p-1 text-center mt-5 cursor-pointer">
                        Contact us
                    </li>
                </Link>
            </ul>
        </div>
    );
};
export default SideBar;