import matter from 'gray-matter';
import { marked } from 'marked';
import { readdir, readFile } from 'node:fs/promises';
export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export async function getFeaturedReview(): Promise<Review> {
  const reviews = await getReviews();
  return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
  const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  const {
    content,
    data: { title, date, image },
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, body };
}

export async function getReviews(): Promise<Review[]> {
  const slugs = await getSlugs();
  const reviews: Review[] = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  // reviews.sort((a, b) => {
  //   if (a.date > b.date) return -1;
  //   if (a.date < b.date) return 1;
  //   return 0;
  // });
  //* A more concise way to write the above code
  reviews.sort((a, b) => b.date.localeCompare(a.date));
  return reviews;
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir('./content/reviews');
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
}

// export async function getLatestReviews(): Promise<Review[]> {
//   // get the latest review based on date
//   const reviews = await getReviews();
//   return reviews
//     .sort((a, b) => {
//       if (a.date > b.date) return -1;
//       if (a.date < b.date) return 1;
//       return 0;
//     })
//     .slice(0, 3);
// }
