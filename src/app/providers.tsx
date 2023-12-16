'use client';

import { Provider } from 'react-redux';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';
import store from "@/redux/stores/store";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
      <Provider store={store}>
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
      </Provider>
  );
}
