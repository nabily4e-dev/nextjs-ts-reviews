import Link from 'next/link';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const HomePage: FC<Props> = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link
                  href='/about'
                  prefetch={false}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Game data images courtesy of{' '}
          <a
            href='https://rawg.io/'
            target='_blank'
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default HomePage;
