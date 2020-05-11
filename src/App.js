import React, { Component } from 'react';

import Router from './component/Router';

import Home from './component/home'
class App extends Component {

  state = {
    steps: {
      home:       false,
      stepOne:    false,
      stepTwo:    false,
      stepThree:  false
    }
  }

  homeState = () => {
    this.setState( state => ({
        steps: { ...state.steps, home: true, stepOne: true }
    }))
}

  stepOne = () => {
    this.setState( state => ({
      steps: {...state.steps, stepOne: false, stepTwo: true}
    }))
  }
  stepTwo = () => {
    this.setState( state => ({
      steps: {...state.steps, stepTwo: false, stepThree: true}
    }))
  }
  render(){
    return (
      <div className={"container-fluid p-0 bg wrapper__scan position-relative " + (this.state.steps.home ? ' ' : 'vh-100')}>
        <main className="">
          {this.state.steps.home ? (
            <Router 
              steps = {this.state.steps}
              stepOne = {this.stepOne}
              stepTwo = {this.stepTwo}
            />) : (<Home homeState = {this.homeState} />)}
        </main>
      </div>
    );
  }
}

export default App;
