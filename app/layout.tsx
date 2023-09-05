import type { ReactNode, FC } from 'react';

type Props = {
  children: ReactNode;
};

const HomePage: FC = ({ children }: Props) => {
  return (
    <html lang='en'>
      <body>
        <header style={{ border: 'solid blue 1px' }}>[header]</header>
        <main>{children}</main>
        <footer style={{ border: 'solid blue 1px' }}>[footer]</footer>
      </body>
    </html>
  );
};

export default HomePage;
