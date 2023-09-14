import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logical Creativity App',
  description:
    'An application for the development of logical thinking skills and creativity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <p>Made By Rak Maniak, Alivka, Sonya and others</p>
    </html>
  );
}