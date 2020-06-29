import React from 'react';

export const Posts = ({ posts, loading }) => {
  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};
