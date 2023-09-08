import Heading from '@/components/heading';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>
      <div className='bg-white border shadow w-80 hover:shadow-xl sm:w-full sm:h-full'>
        <Link
          href='/reviews/stardew-valley'
          className='flex flex-col sm:flex-row'
        >
          <Image
            src='/images/stardew-valley.jpg'
            alt='Stardew Valley'
            width={320}
            height={180}
            className='mb-2 rounded-t sm:rounded-l sm:rounded-r-none sm:mt-2 sm:ml-2'
          />
          <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>
            Stardew Valley
          </h2>
        </Link>
      </div>
    </>
  );
}
