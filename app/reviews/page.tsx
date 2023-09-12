import Heading from '@/components/heading';
import { getReviews } from '@/lib/reviews';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {};

const ReviewsPage: FC<Props> = async (props: Props) => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
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
