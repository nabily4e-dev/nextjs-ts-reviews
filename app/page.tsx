import Heading from '@/components/heading';
import { FC } from 'react';

type Props = {};

const HomePage: FC<Props> = (props: Props) => {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you.</p>
    </>
  );
};

export default HomePage;
