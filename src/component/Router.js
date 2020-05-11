import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ScanQr from './scanQR';

import ConfirmarPedido from './confirmar';
import SeleccionarDelivery from './canjearVale';

import OptionsText from './Optionstext';

import multipagoOferta from '../img/logo__oferta.png';

import {Footer} from './footer'
class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className="col-12 col-md-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-white">
                            <Link to="/">
                                <img src={ multipagoOferta } className="img-fluid d-block mx-auto" alt="" />
                            </Link>
                            <OptionsText steps = {this.props.steps} />
                        </div>
                        <Switch>
                            <Route exact path="/" ><ScanQr stepOne = {this.props.stepOne} /></Route>
                            <Route exact path="/seleccionar-delivery"><SeleccionarDelivery stepTwo = {this.props.stepTwo} /> </Route>
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