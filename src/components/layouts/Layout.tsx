'use client';

import React from 'react';
import AdminLayout from '@/components/layouts/AdminLayout';
import UserLayout from '@/components/layouts/UserLayout';
import NoAuthLayout from '@/components/layouts/NoAuthLayout';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isAuth = false;
  const isAdmin = false;

  if (isAuth && isAdmin) return <AdminLayout>{children}</AdminLayout>;
  if (isAuth && !isAdmin) return <UserLayout>{children}</UserLayout>;

  return <NoAuthLayout>{children}</NoAuthLayout>;
}
