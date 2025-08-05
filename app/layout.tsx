import type { Metadata } from 'next';
import { geist, geistMono, inter } from '@/configs/fonts';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Stock Selector',
  description: 'It helps select intraday stocks & know the sector of any symbol.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
