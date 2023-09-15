'use client';

import Link from 'next/link';
import { Button, Navbar } from 'react-daisyui';

const Header = () => {
  return (
    <header className="sticky top-0 z-30 bg-opacity-90 shadow-sm backdrop:blur">
      <Navbar className="mx-auto md:max-w-[1500px]">
        <div className="navbar-start">
          <Link href="/">
            <Button color="ghost" className="text-xl normal-case">
              Logic Brain
            </Button>
          </Link>
        </div>
        <div className="navbar-end gap-2">
          <Link href="/auth/login">
            <Button>Login</Button>
          </Link>
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
