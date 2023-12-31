'use client';

import React from 'react';
import { Button } from '@nextui-org/button';
import { Session } from 'next-auth';
import SPALink from '@/components/ui/SPALink';

type Props = {
  session: Session | null;
};

export default function RegisterButton({ session }: Props) {
  return (
    <>
      {!session && (
        <SPALink href={'/auth/register'}>
          <Button>Sign Up</Button>
        </SPALink>
      )}
    </>
  );
}
