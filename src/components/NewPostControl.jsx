import React from 'react';
import Post from './Post';
import NewPost from './NewPost';
import ConfirmNewPost from './ConfirmNewPost';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
  }

  handleSubmitNewPost() {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render() {
    let VisibleComponent = null;
    if (this.state.formVisibleOnPage) {
      VisibleComponent = <NewPost onNewPostCreation = {this.props.onSubmitNewPost} />;
    } else {
      VisibleComponent = <ConfirmNewPost onSubmitNewPost={this.handleSubmitNewPost} />;
    }
    return (
      <div>
        <h2>Dev Blog</h2>
        {VisibleComponent}
        {this.props.postList.map((post, index) =>
          <Post title={post.title}
            author={post.author}
            details={post.details}
            key={index} />
        )}
      </div>
    );
  }
}

export default NewPostControl;
