import { getReviews } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'Game reviews by you, gamer ^_*',
};

type Props = {};

const ReviewsPage: FC<Props> = async (props: Props) => {
  const reviews = await getReviews();
  return (
    <>
      <ul className='flex flex-row flex-wrap gap-3'>
        {reviews.map((review) => (
          <li
            key={review.slug}
            className='bg-white border w-80 hover:shadow-xl'
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt={review.title}
                width={320}
                height={180}
                className='mb-2 rounded-t'
              />
              <h2 className='font-semibold font-orbitron py-1 text-center'>
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReviewsPage;
