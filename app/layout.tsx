import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from './components/header';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portal SIAT | Prefeitura de Campo Grande',
  description: 'Desenvolvido por DSF - Inteligência Tributária Municipal.',
  icons: {
    icon: '/favicon.png',
  },
};

const yearNow = new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className='min-h-full flex flex-col'>
        <Header />
        {children}
        <footer className='flex items-center p-10  h-10 bg-primary justify-center'>
          <p className='text-xs text-center md:text-sm text-white'>
            © {yearNow} Prefeitura de Campo Grande.Todos os direitos reservados.{' '}
            <br />
            Desenvolvido por DSF - Inteligência Tributária Municipal.
          </p>
        </footer>
      </body>
    </html>
  );
}
