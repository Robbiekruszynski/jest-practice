import React from 'react';
import Navbar from './Navbar';
import Highlights from './Highlights';
import Content from './Content';
import { Switch, Route } from 'react-router-dom';
import Model from './model/Model';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Model} />
        <Route path='/highlights' component={Highlights} />
        <Route component={Error404} />
      </Switch>
      <Content/>
    </div>
  );
}

export default App;
