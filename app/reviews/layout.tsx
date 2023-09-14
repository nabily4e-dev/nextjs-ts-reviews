import Heading from '@/components/heading';
import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ReviewsLayout: FC<Props> = ({ children }: Props) => {
  return (
    <section>
      <Heading>Reviews</Heading>
      <main>{children}</main>
    </section>
  );
};

export default ReviewsLayout;
