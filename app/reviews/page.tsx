import Heading from '@/components/heading';
import Link from 'next/link';
import type { FC } from 'react';

type Props = {};

const ReviewsPage: FC<Props> = (props: Props) => {
  return (
    <>
      <Heading>Reviews</Heading>
      <ul>
        <li>
          <Link href='/reviews/hollow-knight'>Hollow Knight</Link>
        </li>
        <li>
          <Link href='/reviews/stardew-valley'>Stardew Valley</Link>
        </li>
      </ul>
    </>
  );
};

export default ReviewsPage;
