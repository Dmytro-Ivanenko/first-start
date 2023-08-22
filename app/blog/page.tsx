'use client';

import { error } from 'console';
import type { Metadata } from 'next';
import { useState, useEffect } from 'react';

import { getAllPosts } from '../../services/getPosts';
import Posts from '../../components/Posts';

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
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>

      {loading ? <h3>Loading...</h3> : <Posts posts={posts}></Posts>}
    </>
  );
}
