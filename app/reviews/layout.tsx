import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ReviewsLayout = ({ children }: Props) => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ border: 'solid red 1px' }}>reviews menubar</div>
      <div>{children}</div>
    </div>
  );
};

export default ReviewsLayout;
