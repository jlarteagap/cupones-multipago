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
      confirm:    false
    },
    client: {},
    deliverys: [],
    delivery: '',
    status: ''
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

    await axios.post(url, {qr_code: codeQr})
      .then(res => {

        if (res.data.status === 'OK') {
          this.setState( state =>({
            steps: {...state.steps, stepTwo: true, stepOne: false},
            client: res.data.data.info,
            deliverys: res.data.data.deliverys,
            status: res.data.status,
          }))
        } else {
          this.setState({
            status: res.data.status
          })
        }      
      })
  }

  orderConfirm = (data) => {
    this.setState( state => ({
      steps: {...state.steps, stepThree: false, confirm: true}
    }))

    const url =  'https://stagingmultipago.ticketeg.com/api/v2/coupon-api/createCouponExchange'

    axios.post(url, data)
      .then(res => {
        this.setState( state => ({
          steps: {...state.steps, stepThree: false, confirm: true}
        }))
      })
  }

  checkDelivery = (id) => {
    this.setState({
      delivery: id
    })
  }

  render(){
    return (
      <div className={"container-fluid p-0 bg wrapper__scan min-vh-100 position-relative " + (this.state.steps.home ? ' ' : 'vh-100')}>
        <main className="">
          {this.state.steps.home ? (
            <Router 
              steps = {this.state.steps}
              client = {this.state.client}
              status = {this.state.status}
              deliverys = {this.state.deliverys}
              delivery = {this.state.delivery}
              stepTwo = {this.stepTwo}
              stepThree = {this.stepThree}
              clickReset = {this.clickReset}
              codeScaner = {this.codeScaner}
              checkDelivery = {this.checkDelivery}
              orderConfirm = {this.orderConfirm}
            />) : (<Home homeState = {this.homeState} />)}
        </main>
      </div>
    );
  }
}

export default App;
