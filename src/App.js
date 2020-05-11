import React, { Component } from 'react';

import Router from './component/Router';

import Home from './component/home'
class App extends Component {

  state = {
    stepOne: false
  }

  render(){
    return (
      <div className="container-fluid bg wrapper__scan position-relative vh-100">
        <main className="">
          {this.state.stepOne ? (<Router />) : (<Home />)}
        </main>
      </div>
    );
  }
}

export default App;
