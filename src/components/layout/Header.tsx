'use client';

import { useSession } from 'next-auth/react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import SPALink from '../ui/SPALink';
import LoginButton from '@/components/ui/LoginButton';

const Header = () => {
  const { data: session } = useSession();

  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <SPALink href='/' className='font-bold text-inherit'>
          Logic Brain
        </SPALink>
      </NavbarBrand>
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem isActive>
          <SPALink href='/new-test' aria-current='page'>
            Create new test
          </SPALink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <LoginButton session={session} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
