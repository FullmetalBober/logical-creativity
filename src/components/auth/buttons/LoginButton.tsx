'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@nextui-org/button';
import { Session } from 'next-auth';
import SPALink from '@/components/ui/SPALink';

type Props = {
  session: Session | null;
};

export default function LoginButton({ session }: Props) {
  const handleSignIn = async () => {
    await signIn();
  };

  const handleSignOut = async () => {
    await signOut({
      callbackUrl: '/auth/login',
    });
  };

  return (
    <>
      {session?.user ? (
        <SPALink href={'/auth/logout'}>
          <Button onClick={handleSignOut}>Sign Out</Button>
        </SPALink>
      ) : (
        <SPALink href={'/auth/login'}>
          <Button onClick={handleSignIn}>Sign In</Button>
        </SPALink>
      )}
    </>
  );
}
