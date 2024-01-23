
import AppBar from "@/components/Appbar";
import "./globals.css"
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from '@/components/Providers'
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Darb App',
  description: 'Gus Yus App',
  icons: {
    icon: "/next.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers >
        <main className=''>
          <AppBar />
          {children}
        </main>
        </Providers>
      </body>

    </html>
  );
}