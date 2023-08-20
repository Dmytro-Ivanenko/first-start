import { error } from 'console';
import type { Metadata } from 'next';
import Link from 'next/link';

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    // next кешує отримані дані, тому повторно запит не відбудеться
    next: {
      revalidate: 60, //  буде робити запит повторно через 60 сек
    },
  });

  if (!res.ok) {
    throw new Error('Something is wrong(');
  }
  return res.json();
}

export const metadata: Metadata = {
  title: 'Blog',
};

export default async function Blog() {
  const posts = await getData();
  return (
    <>
      <h1>Blog page</h1>

      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
