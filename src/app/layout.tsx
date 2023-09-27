import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/app/providers';
import Header from '@/components/layout/Header';
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logical Creativity App',
  description: 'An application for the development of logical thinking skills and creativity.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Toaster position='top-right' />
          {children}
        </Providers>
      </body>
    </html>
  );
}
