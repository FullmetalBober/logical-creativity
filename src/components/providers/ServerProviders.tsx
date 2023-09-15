import React from 'react';
import { SessionProvider } from 'next-auth/react';

interface ServerProvidersProps {
  children: React.ReactNode;
}

export default function ServerProviders({ children }: ServerProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
