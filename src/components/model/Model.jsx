import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import threeEntryPoint from './threejs/threeEntryPoint';

export default class Model extends Component {

  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  goToOtherPage() {

  }

  render () {
    return (
      <div>
        <style jsx>{`
          div {
            height: 80vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          `}</style>
        <Link to="/highlights"><div className='header-header' ref={element => this.threeRootElement = element} ></div></Link>
      </div>
    );
  }
}
