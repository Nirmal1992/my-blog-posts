import React from 'react';
import Post from './Post';

const Posts = ({ posts }) => {
  return (
    <section className='Posts'>
      {posts.map(post => (
        <Post {...post} key={post.id} />
      ))}
    </section>
  );
};

export default Posts;
