import type { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ReviewsLayout: FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <div>
        <h1>Reviews</h1>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ReviewsLayout;
