import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  var styledNavbar = {
    backgroundColor: 'lightblue',
    paddingTop: '50px'
  };
  return (
    <div style={styledNavbar}>
      <h1>Modeling items with three.js</h1>
      <Link to="/highlights">About</Link> | <Link to="/">View 3D Model</Link>
    </div>
  );
}

export default Navbar;
