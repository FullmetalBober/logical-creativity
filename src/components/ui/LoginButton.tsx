'use client';

import React from 'react';
import { signIn, signOut } from 'next-auth/react';
import { Button } from '@nextui-org/button';
import { Session } from 'next-auth';

interface LoginButtonProps {
  session: Session | null;
}

export default function LoginButton({ session }: LoginButtonProps) {
  return (
    <>
      {session?.user ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn()}>Sign In</Button>
      )}
    </>
  );
}
