'use client';

import React from 'react';

interface NoAuthLayoutProps {
  children: React.ReactNode;
}

export default function NoAuthLayout({ children }: NoAuthLayoutProps) {
  return <>{children}</>;
}
