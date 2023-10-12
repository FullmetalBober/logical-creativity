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
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
          <NavbarItem>
              <SPALink href='/notes' aria-current='page'>
                  Notebook
              </SPALink>
          </NavbarItem>
        <NavbarItem isActive>
          <SPALink href='/new-test' aria-current='page'>
            Create new test
          </SPALink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <SPALink href='/auth/login'>Login</SPALink>
        </NavbarItem>
        <NavbarItem>
          <SPALink href='/auth/signUp'>
            <Button color='primary' variant='flat'>
              Sign Up
            </Button>
          </SPALink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
