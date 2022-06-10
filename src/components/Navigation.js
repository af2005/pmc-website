import React from "react";

import { Navbar } from "flowbite-react";
import logo from "../img/logo/min/logo-black.svg";
import { Link } from "gatsby";

function NavbarLink(props) {
  return (
    <li>
      <Link
        to={props.to}
        className="nav-link hover:cursor-pointer block py-2 pr-4 pl-3 md:p-0 md:py-2 border-b border-gray-100
          text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400
          dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent
          md:hover:text-black md:dark:hover:bg-transparent md:dark:hover:text-white"
        activeClassName="nav-link-active md:[border-bottom-width:4px]"
      >
        {props.children}
      </Link>
    </li>
  );
}

export function Navigation() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Power Mind Club" />
        </Link>
        <div className="flex md:order-2">
          <Link to="contact/">
            <button
              className="btn
            group flex h-min w-fit items-center justify-center p-0.5
            focus:z-10 rounded-lg
            btn-apple btn-with-love"
            >
              <span className="flex items-center text-sm px-4 py-2 rounded-md">
                Lade die App
              </span>
            </button>
          </Link>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavbarLink to={"/"}>Home</NavbarLink>
          <NavbarLink to="/about-us">Über uns</NavbarLink>
          <NavbarLink to="/why">Warum PMC</NavbarLink>
          <NavbarLink to="/app">App</NavbarLink>
          <NavbarLink to="/blog">Blog</NavbarLink>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
