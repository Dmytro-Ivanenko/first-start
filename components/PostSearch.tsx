'use client';

// import { getPostsBySearch } from '@/services/getPosts';
import { FormEventHandler, useState } from 'react';
import { usePosts } from '../store';

const PostSearch = () => {
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts(state => state.getPostsBySearch);

  const onSubmitForm: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();
    await getPostsBySearch(search);
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
