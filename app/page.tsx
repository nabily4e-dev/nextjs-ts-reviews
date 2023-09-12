import Heading from '@/components/heading';
import { getFeaturedReview } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type Props = {};

const HomePage: FC<Props> = async (props: Props) => {
  const review = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className='pb-3'>Only the best indie games, reviewed for you.</p>
      <div className='bg-white border shadow w-80 hover:shadow-xl sm:w-full sm:h-full'>
        <Link
          href={`/reviews/${review.slug}`}
          className='flex flex-col sm:flex-row'
        >
          <Image
            src={review.image}
            alt='Stardew Valley'
            width={320}
            height={180}
            className='mb-2 rounded-t sm:rounded-l sm:rounded-r-none sm:mt-2 sm:ml-2'
          />
          <h2 className='font-semibold font-orbitron py-1 text-center sm:px-2'>
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
