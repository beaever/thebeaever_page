import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio | Frontend Developer',
  description: '사용자 경험을 중시하는 프론트엔드 개발자 포트폴리오입니다.',
  keywords: ['Frontend', 'Developer', 'React', 'TypeScript', 'Next.js'],
  authors: [{ name: 'THEBEAEVER' }],
  icons: {
    icon: '/portfolio/favicon.ico',
    apple: '/portfolio/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Portfolio | Frontend Developer',
    description: '사용자 경험을 중시하는 프론트엔드 개발자 포트폴리오입니다.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
