import Heading from '@/components/heading';
import { FC } from 'react';

type Props = {};

const AboutPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Heading>About</Heading>
      <p>A website created to learn Next.js</p>
    </>
  );
};

export default AboutPage;
