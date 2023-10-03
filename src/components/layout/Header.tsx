'use client';

import { Button } from '@nextui-org/button';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import SPALink from '../ui/SPALink';
import LoginButton from '@/components/auth/buttons/LoginButton';
import { User } from '@nextui-org/user';
import { Session } from 'next-auth';
import RegisterButton from '@/components/auth/buttons/RegisterButton';

type HeaderProps = {
  session: Session | null;
};

const Header = ({ session }: HeaderProps) => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <SPALink href='/' className='font-bold text-inherit'>
          Logic Brain
        </SPALink>
      </NavbarBrand>
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        {session?.user && (
          <NavbarItem isActive>
            <SPALink href='/new-test' aria-current='page'>
              Create new test
            </SPALink>
          </NavbarItem>
        )}
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          {session && session.user && session.user.image != null && (
            <User
              name={session.user.name}
              description={session.user.email}
              avatarProps={{
                src: session.user.image,
              }}
            />
          )}
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <LoginButton session={session} />
        </NavbarItem>
        {!session && (
          <NavbarItem className='hidden lg:flex'>
            <RegisterButton session={session} />
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
