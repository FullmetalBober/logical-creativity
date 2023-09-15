import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ServerProvidersProps {
  children: ReactNode;
}

export default async function ServerProviders({ children }: ServerProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
