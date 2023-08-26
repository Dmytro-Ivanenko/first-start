// 'use client';

import type { Metadata } from 'next';

import Posts from '../../components/Posts';
import PostSearch from '@/components/PostSearch';

// async function getData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//                                                          // next кешує отримані дані, тому повторно запит не відбудеться
//     next: {
//       revalidate: 60,                                     //  буде робити запит повторно через 60 сек
//     },
//   });

//   if (!res.ok) {
//     throw new Error('Something is wrong(');
//   }
//   return res.json();
// }

export const metadata: Metadata = {
  title: 'Blog',
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch></PostSearch>

      {<Posts />}
    </>
  );
}
