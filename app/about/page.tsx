import Heading from '@/components/heading';
import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About this website',
};

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
