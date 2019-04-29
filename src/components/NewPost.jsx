import React from 'react';
import PropTypes from 'prop-types';

function NewPost(props){
  let _title = null;
  let _author = null;
  let _details = null;

  function handleSubmitNewPost(event) {
    event.preventDefault();
    props.onNewPostCreation({title: _title.value, author: _author.value, details: _details.value});
    _title.value ='';
    _author.value ='';
    _details.value ='';
  }

  return (
    <div >
      <form onSubmit={handleSubmitNewPost}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}/>
        <input
          type='text'
          id='author'
          placeholder='Author'
          ref={(input) => {_author = input;}}/>
        <input
          type='text'
          id='details'
          placeholder='Details'
          ref={(input) => {_details = input;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPost.propTypes = {
  onNewPostCreation: PropTypes.func
}

export default NewPost;
