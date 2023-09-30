'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { NoteContextProvider } from '@/context/note-context';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <NoteContextProvider>{children}</NoteContextProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
