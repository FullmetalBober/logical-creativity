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
    <Navbar shouldHideOnScroll data-theme="dark" style={{color: 'white', background: '#1d232a'}}>
      <NavbarBrand>
        <SPALink href='/' className="btn btn-ghost normal-case text-xl">
          Logic Brain
        </SPALink>
      </NavbarBrand>
      {/* {session?.user && ( */}
      <NavbarContent className='hidden gap-4 sm:flex' justify='center'>
        <NavbarItem>
          <SPALink href='/notes' aria-current='page' className="btn btn-ghost normal-case text-xl">
            Notebook
          </SPALink>
        </NavbarItem>
        <NavbarItem>
          <SPALink href='/new-test' aria-current='page' className="btn btn-ghost normal-case text-xl">
            Create new test
          </SPALink>
        </NavbarItem>
        <NavbarItem className='hidden gap-4 sm:flex'>
          <SPALink href='/card-game' className="btn btn-ghost normal-case text-xl">Play CardGame</SPALink>
        </NavbarItem>
        <NavbarItem className='hidden gap-4 sm:flex'>
          <SPALink href='/pin-guess' className="btn btn-ghost normal-case text-xl">Guess the PIN</SPALink>
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
