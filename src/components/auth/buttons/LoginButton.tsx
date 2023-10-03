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
        <Button as={SPALink} href={'/auth/logout'} onClick={handleSignOut}>
          Sign Out
        </Button>
      ) : (
        <Button as={SPALink} href={'/auth/login'} onClick={handleSignIn}>
          Sign In
        </Button>
      )}
    </>
  );
}
