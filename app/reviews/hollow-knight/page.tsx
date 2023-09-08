import Heading from '@/components/heading';
import Image from 'next/image';

export default function HollowKnightPage() {
  return (
    <>
      <Heading>Hollow Knight</Heading>
      <Image
        src='/images/hollow-knight.jpg'
        alt='Hollow Knight'
        width={1280}
        height={720}
        className='mb-2 rounded'
      />
      <p>This will be the review for Hollow Knight.</p>
    </>
  );
}
