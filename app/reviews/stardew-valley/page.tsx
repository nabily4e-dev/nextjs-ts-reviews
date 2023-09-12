import Heading from '@/components/heading';
import Image from 'next/image';
import { FC } from 'react';

type Props = {};

const StardewValley: FC<Props> = (props: Props) => {
  return (
    <>
      <Heading>Stardew Valley</Heading>
      <Image
        src='/images/stardew-valley.jpg'
        alt='Hollow Knight'
        width={1280}
        height={720}
        className='mb-2 rounded'
      />
      <p>This will be the review for Stardew Valley.</p>
    </>
  );
};

export default StardewValley;
