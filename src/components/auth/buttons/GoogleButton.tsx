'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@nextui-org/button';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  const [isLoading, setIsLoading] = useState(false);

  const onGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn('google', {
      redirect: true,
      callbackUrl: '/',
    });
    setIsLoading(false);
  };

  return (
    <Button variant={'flat'} size={'lg'} color={'default'} onClick={onGoogleSignIn} isLoading={isLoading}>
      <FcGoogle className={'text-2xl'} />
      Sign in with Google
    </Button>
  );
}
