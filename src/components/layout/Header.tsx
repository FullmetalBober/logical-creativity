'use client';

import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import SPALink from '../ui/SPALink';

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
  );
};

export default Header;
