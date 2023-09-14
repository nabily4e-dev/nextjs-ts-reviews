import NavBar from '@/components/nav-bar';
import { Metadata } from 'next';
import type { FC, ReactNode } from 'react';
import { exo2, orbitron } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: ' Indie Game Reviews',
    template: '%s | Indie Game Reviews',
  },
  generator: 'nabily4e',
  applicationName: 'Indie Game Reviews',
  keywords: ['indie, game, reviews, gamer, gaming, review'],
  description: 'Game reviews by you, gamer ^_*',
  creator: 'nabily4e',
};

type Props = {
  children: ReactNode;
};

const HomePage: FC<Props> = ({ children }: Props) => {
  return (
    <html
      lang='en'
      className={`${orbitron.variable} ${exo2.variable}`}
    >
      <body className='bg-orange-50 flex flex-col px-4 py-2 min-h-screen'>
        <header>
          <NavBar />
        </header>
        <main className='grow py-3'>{children}</main>
        <footer className='border-t py-3 text-center text-slate-500 text-sx'>
          Game data and images courtesy of{' '}
          <a
            href='https://rawg.io/'
            target='_blank'
            className='text-orange-800 hover:underline'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default HomePage;
