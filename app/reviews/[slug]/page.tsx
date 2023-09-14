import Heading from '@/components/heading';
import { getReview, getSlugs } from '@/lib/reviews';
import { Metadata } from 'next';
import Image from 'next/image';
import { FC } from 'react';

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params: { slug },
}: ReviewPageProps): Promise<Metadata> {
  const { title } = await getReview(slug);
  return {
    title: `${title}`,
    description: `Review of ${title}`,
  };
}

const ReviewPage: FC<ReviewPageProps> = async ({
  params: { slug },
}: ReviewPageProps) => {
  const { title, date, image, body } = await getReview(slug);
  console.log('[ReviewPage] rendering:', slug);

  return (
    <>
      <Heading>{title}</Heading>
      <p className='italic pb-2'>{date}</p>
      <Image
        src={image}
        alt='Hollow Knight'
        width={640}
        height={360}
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className=' max-w-screen-sm prose prose-slate'
      ></article>
    </>
  );
};

export default ReviewPage;
