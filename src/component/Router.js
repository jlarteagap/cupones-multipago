import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScanQr from './scanQR';

import Home from './home';
import ConfirmarPedido from './confirmar';
import SeleccionarDelivery from './canjearVale';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"><Home /></Route>
                    <Route exact path="/scan" ><ScanQr /></Route>
                    <Route exact path="/seleccionar-delivery"><SeleccionarDelivery /> </Route>
                    <Route exact path="/confirmar-pedido"><ConfirmarPedido /> </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Router; 