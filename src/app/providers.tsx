'use client';

import React, { ReactNode } from 'react';
import ServerProviders from '@/components/providers/ServerProviders';
import ClientProviders from '@/components/providers/ClientProviders';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ServerProviders>
      <ClientProviders>{children}</ClientProviders>
    </ServerProviders>
  );
}
