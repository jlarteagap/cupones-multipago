import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScanQr from './scanQR';

import Home from './home';
import ConfirmarPedido from './confirmar';
import SeleccionarDelivery from './canjearVale';

import HomeText from './home__text';
import OptionsText from './Optionstext';

import multipagoOferta from '../img/logo__oferta.png';

import {Footer} from './footer'
class Router extends Component {

    state = {
        stepOne: false
    }

    homeState = () => {
        this.setState({
            stepOne: true
        })
    }

    render() {
        return(
            <BrowserRouter>
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-white">

                            <img src={ multipagoOferta } className="img-fluid d-block mx-auto" alt="" />
                            
                            {this.state.stepOne ? (<OptionsText />) : (<HomeText homeState = {this.homeState}
                            
                            />) }
                            
                        </div>
                        <Switch>
                            <Route exact path="/"><Home /></Route>
                            <Route exact path="/scan" ><ScanQr /></Route>
                            <Route exact path="/seleccionar-delivery"><SeleccionarDelivery /> </Route>
                            <Route exact path="/confirmar-pedido"><ConfirmarPedido /> </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router; 