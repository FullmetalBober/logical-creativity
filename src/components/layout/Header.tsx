'use client';

import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import SPALink from '../ui/SPALink';
import {Link} from "@nextui-org/react";
import React from "react";

const Header = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <SPALink href='/' className='font-bold text-inherit'>
          Logic Brain
        </SPALink>
      </NavbarBrand>
      {/* <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <SPALink color='foreground' href='#'>
            Features
          </SPALink>
        </NavbarItem>
        <NavbarItem isActive>
          <SPALink href='#' aria-current='page'>
            Customers
          </SPALink>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <SPALink href='/auth/login'>Login</SPALink>
        </NavbarItem>
        <NavbarItem>
          <Button as={SPALink} color='primary' href='/auth/signUp' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

      // new header

    // <Navbar className="bg-blue-600 text-amber-50" shouldHideOnScroll>
    //     <NavbarBrand>
    //         <p className="font-bold text-inherit">Logical Creativity App</p>
    //     </NavbarBrand>
    //     <NavbarContent className="hidden sm:flex gap-4" justify="center">
    //         <NavbarItem>
    //             <Link color="foreground" className="text-amber-50" href="#">
    //                 Home
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" className="text-amber-50" href="#">
    //                 Tests
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" className="text-amber-50" href="#">
    //                 Games
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" className="text-amber-50" href="#">
    //                 About
    //             </Link>
    //         </NavbarItem>
    //         <NavbarItem>
    //             <Link color="foreground" className="text-amber-50" href="#">
    //                 Writer
    //             </Link>
    //         </NavbarItem>
    //     </NavbarContent>
    //     <NavbarContent justify="end">
    //         <NavbarItem className="hidden lg:flex">
    //             <Link color="foreground" className="text-amber-50" href="#">Login</Link>
    //         </NavbarItem>
    //         <NavbarItem className="hidden lg:flex">
    //             <Link color="foreground" className="text-amber-50" href="#">Sign up</Link>
    //         </NavbarItem>
    //     </NavbarContent>
    // </Navbar>
  );
};

export default Header;
