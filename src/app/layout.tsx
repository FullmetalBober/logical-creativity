import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import Header from '@/components/layout/Header';
import Main from "@/components/layout/Main";
import { Toaster } from 'react-hot-toast';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logical Creativity App',
  description: 'An application for the development of logical thinking skills and creativity.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>
          <Header session={session} />
          <Toaster position='top-center' />
          {children}
        </Providers>
      </body>
    </html>
  );
}
