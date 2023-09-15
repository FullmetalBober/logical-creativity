import React from 'react';
import ServerProviders from '@/components/providers/ServerProviders';
import ClientProviders from '@/components/providers/ClientProviders';

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
}
