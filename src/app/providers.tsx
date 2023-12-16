'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '@/store';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
