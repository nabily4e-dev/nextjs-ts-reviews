import Heading from '@/components/heading';
import Image from 'next/image';
import Link from 'next/link';

export default function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className='flex flex-col gap-3'>
        <li className='bg-white border w-80 hover:shadow-xl'>
          <Link href='/reviews/hollow-knight'>
            <Image
              src='/images/hollow-knight.jpg'
              alt='Hollow Knight'
              width={320}
              height={180}
              className='mb-2 rounded-t'
            />
            <h2 className='font-semibold font-orbitron py-1 text-center'>
              Hollow Knight
            </h2>
          </Link>
        </li>
        <li className='bg-white border w-80 hover:shadow-xl'>
          <Link href='/reviews/stardew-valley'>
            <Image
              src='/images/stardew-valley.jpg'
              alt='Stardew Valley'
              width={320}
              height={180}
              className='mb-2 rounded-t'
            />
            <h2 className='font-semibold font-orbitron py-1 text-center'>
              Stardew Valley
            </h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
