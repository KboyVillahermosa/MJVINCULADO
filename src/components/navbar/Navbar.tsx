
"use client";

import { Button, Navbar, DarkThemeToggle } from "flowbite-react";

export function Component() {
  return (
    <Navbar fluid rounded className=" dark:bg-gray-800 rounded-none">
      <Navbar.Brand href="">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white dark:bg-gray-800">MJ</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className="dark mr-3">
        <DarkThemeToggle />
        </div>
        <Button gradientDuoTone="greenToBlue">Green to Blue</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
