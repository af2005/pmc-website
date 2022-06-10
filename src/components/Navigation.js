import React from "react";

import { Navbar, Button } from "flowbite-react";
import logo from "../img/logo/min/logo-black.svg";
import { Link } from "gatsby";

export function Navigation() {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img src={logo} className="mr-3 h-6 sm:h-9" alt="Power Mind Club" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Link to="contact/">
            <Button className="btn-apple">Lade die App</Button>
          </Link>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Navbar.Link href="/about-us">Über uns</Navbar.Link>
          <Navbar.Link href="/why">Warum PMC</Navbar.Link>
          <Navbar.Link href="/app">App</Navbar.Link>
          <Navbar.Link href="/blog">Blog</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
