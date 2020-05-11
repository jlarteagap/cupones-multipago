import React, { Component } from 'react';

import Router from './component/Router';

import Home from './component/home'
class App extends Component {

  state = {
    stepOne: false
  }

  homeState = () => {
    this.setState({
        stepOne: true
    })
} 
  render(){
    return (
      <div className={"container-fluid p-0 bg wrapper__scan position-relative " + (this.state.stepOne ? ' ' : 'vh-100')}>
        <main className="">
          {this.state.stepOne ? (<Router />) : (<Home homeState = {this.homeState} />)}
        </main>
      </div>
    );
  }
}

export default App;
