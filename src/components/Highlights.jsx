import React from 'react';
import Post from './Post';

var postList = [
  {
    title: 'three.js',
    author: 'Mr.doob',
    details: 'A JavaScript library which gives you the power to model 3D objects'
  },
  {
    title: 'Future Goals',
    author: 'Travis Toal',
    details: 'I want to use three.js to model a solar system, and eventually the physics of a black hole.'
  },
  {
    title: 'Resources / Inspirations',
    author: 'oseiskar / Darryl Huffman',
    details: 'Two projects which have functionality similar to what I want are <a href="https://oseiskar.github.io/black-hole/">oseiskars\'s</a> and <a href="https://codepen.io/darrylhuffman/details/gRZrpv">Darryl Huffman\'s</a> black hole sites.'
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
