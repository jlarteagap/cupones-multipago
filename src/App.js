import React, { Component } from 'react';
import axios from 'axios'

import Router from './component/Router';

import Home from './component/home'
class App extends Component {

  state = {
    steps: {
      home:       false,
      stepOne:    false,
      stepTwo:    false,
      stepThree:  false,
    },
    data: ''
  }

  homeState = () => {
    this.setState( state => ({
        steps: { ...state.steps, home: true, stepOne: true }
    }))
}

  stepTwo = () => {
    this.setState( state => ({
      steps: {...state.steps, stepOne: false, stepTwo: true, stepThree: false}
    }))
  }
  stepThree = () => {
    this.setState( state => ({
      steps: {...state.steps, stepOne: false, stepTwo: false, stepThree: true}
    }))
  }
  clickReset = () => {
    this.setState( state => ({
      
      steps: {home: true, stepOne: true, stepTwo: false, stepThree: false}
    }))
  }

  codeScaner = async(codeQr) => {
    
    const url = 'https://stagingmultipago.ticketeg.com/api/v2/coupon-api/getDataServiceDelivery'

    await axios.post(url, codeQr)
      .then(res => {
        console.log(res)
      })
  }

  render(){
    return (
      <div className={"container-fluid p-0 bg wrapper__scan position-relative " + (this.state.steps.home ? ' ' : 'vh-100')}>
        <main className="">
          {this.state.steps.home ? (
            <Router 
              steps = {this.state.steps}
              stepTwo = {this.stepTwo}
              stepThree = {this.stepThree}
              clickReset = {this.clickReset}
              codeScaner = {this.codeScaner}
            />) : (<Home homeState = {this.homeState} />)}
        </main>
      </div>
    );
  }
}

export default App;
