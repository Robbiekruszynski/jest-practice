import React from 'react';
import PropTypes from 'prop-types';

function Post(props){
  return (
    <div>
      <style jsx>{`
         div {
           background-color: green;
           font-family: arial;
         }
       `}</style>
      <p>POST JSX: In this template, the Post file is nested within the Highlights component. For example:</p>
      <h3>{props.title}</h3>
      <h4>{props.author}</h4>
      <p>{props.details}</p>
      <hr/>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  details: PropTypes.string.isRequired
};

export default Post;
