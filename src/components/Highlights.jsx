import React from 'react';
import Post from './Post';

var postList = [
  {
    title: 'three.js',
    author: 'A JavaScript library which gives you the power to model 3D objects',
    details: 'Navigate to learn more'
  }
];

function Highlights(){
  return (
    <div>
      <h2>About the tech</h2>
      {postList.map((post, index) =>
        <Post title={post.title}
          author={post.author}
          details={post.details}
          key={index} />
      )}
    </div>
  );
}

export default Highlights;
