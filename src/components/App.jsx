import React from 'react';
import Navbar from './Navbar';
import NewPost from './NewPost';
import Content from './Content';
import NewPostControl from './NewPostControl';
import { Switch, Route } from 'react-router-dom';
import Model from './model/Model';
import Error404 from './Error404';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      postList: [
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
      ]
    };
    this.handleSubmitNewPost = this.handleSubmitNewPost.bind(this);
  }

  handleSubmitNewPost(newPost) {
    var newPostList = this.state.postList.slice();
    newPostList.push(newPost);
    this.setState({postList: newPostList});
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Model} />
          <Route path='/posts' render={() => <Content /> } />
          <Route path='/highlights' render={()=><NewPostControl postList={this.state.postList}  onSubmitNewPost={this.handleSubmitNewPost} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
