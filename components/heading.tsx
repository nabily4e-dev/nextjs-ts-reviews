import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => {
  return <h1 className='font-bold pb-3 text-2xl'>{children}</h1>;
};

export default Heading;
