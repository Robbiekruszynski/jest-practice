import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import ConfirmNewPost from './ConfirmNewPost';

function Content(props) {
  return (
    <div>
      {props.postList.map((post, index) =>
        <Post title={post.title}
          author={post.author}
          details={post.details}
          key={index} />
      )}
    </div>
  );
}

export default Content;
