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
      {/* {session?.user && ( */}
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <SPALink href='/notes' aria-current='page'>
            Notebook
          </SPALink>
        </NavbarItem>
        <NavbarItem>
          <SPALink href='/new-test' aria-current='page'>
            Create new test
          </SPALink>
        </NavbarItem>
        <NavbarItem className='hidden gap-4 sm:flex'>
          <SPALink href='/card-game'>Play CardGame</SPALink>
        </NavbarItem>
        <NavbarItem className='hidden gap-4 sm:flex'>
          <SPALink href='/pin-guess'>Guess the PIN</SPALink>
        </NavbarItem>
      </NavbarContent>
      {/* )} */}
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
