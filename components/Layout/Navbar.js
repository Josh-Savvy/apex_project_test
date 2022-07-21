import Link from "next/link";
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  const SideBar = () => {
    // e.preventDefault();
    return (
      <Menu>
        <a id="demo" className="menu-item" href="/">Demo</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
    );
  }

  return (
    <>
      <nav
        className="bg-white border-gray-200 sm:px-4 py-2.5 dark:bg-gray-800 fixed w-full top-0"
        style={{ zIndex: 10 }}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/" >
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-orange-500 cursor-pointer md:ml-0 ml-4">
              Apex
            </span>
          </Link>
          <div className="flex md:order-2">
            <Link href="/">
              <button className="hidden md:block text-dark dark:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
                Login
              </button>
            </Link>
            <Link href="/">
              <button className="hidden md:block text-white bg-orange-500 hover:bg-orange-600 duration-300 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-orange-600 dark:hover:bg-orange-500 dark:focus:ring-4">
                Get Started Free
              </button>
            </Link>
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="md:hidden inline-flex items-center p-2 text-black dark:text-white"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <SideBar />


        </div>
      </nav>
      <br />
    </>
  );
}
export default Navbar