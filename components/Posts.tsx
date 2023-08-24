'use client';

import useSWR from 'swr';
// import { useEffect } from 'react';
// import { shallow } from 'zustand/shallow';
import Link from 'next/link';
import { getAllPosts } from '@/services/getPosts';
// import { usePosts } from '../store';

const Posts = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);
  //   const [posts, loading, getAllPosts] = usePosts(
  //     state => [state.posts, state.loading, state.getAllPosts],
  //     shallow
  //   );

  //   useEffect(() => {
  //     getAllPosts();
  //   }, [getAllPosts]);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
