'use client';

import useSWR from 'swr';

import { FormEventHandler, useState } from 'react';
// import { usePosts } from '../store';
import { getPostsBySearch } from '../services/getPosts';

const PostSearch = () => {
  const { mutate } = useSWR('posts');
  const [search, setSearch] = useState('');
  //   const getPostsBySearch = usePosts(state => state.getPostsBySearch);

  const onSubmitForm: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);

    mutate(posts);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
