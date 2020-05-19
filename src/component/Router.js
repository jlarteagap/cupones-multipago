import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import ScanQr from './scanQR';
import ConfirmarPedido from './confirmar';
import SeleccionarDelivery from './canjearVale';

import OptionsText from './Optionstext';

import multipagoOferta from '../img/logo__oferta.png';

import {Footer} from './footer'
import SendMail from './enviado';
class Router extends Component {

    render() {
        return(
            <BrowserRouter>
                <div className="col-12 col-md-10 mx-auto pt-5">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 text-white p-0">
                            <Link to="/" onClick={ () => this.props.clickReset() }>
                                <img src={ multipagoOferta } className="img-fluid d-block mx-auto" alt="" />
                            </Link>
                            <OptionsText steps = {this.props.steps} />
                        </div>
                        <Switch>
                            <Route exact path="/" >
                                <ScanQr codeScaner = {this.props.codeScaner}  /></Route>
                            <Route exact path="/seleccionar-delivery">
                                <SeleccionarDelivery 
                                stepThree = {this.props.stepThree}
                                clickReset = {this.props.clickReset} 
                                client = {this.props.client}
                                deliverys = {this.props.deliverys}
                                delivery = {this.props.delivery}
                                status = {this.props.status}
                                checkDelivery = {this.props.checkDelivery}
                                loading = {this.props.loading}
                                /> </Route>
                            <Route exact path="/confirmar-pedido" render={ () => {
                                let idDelivery = this.props.delivery
                                
                                const deliverys = this.props.deliverys;
                                
                                let filtro;

                                // eslint-disable-next-line eqeqeq
                                filtro = deliverys.filter(delivery => (delivery.id === Number(idDelivery)))

                                return(
                                    <ConfirmarPedido 
                                    delivery = {filtro[0]}
                                    client = {this.props.client}
                                    stepTwo = {this.props.stepTwo}
                                    stepThree = {this.props.stepThree}
                                    clickReset = {this.props.clickReset}
                                    orderConfirm = {this.props.orderConfirm}
                                    />
                                )
                            }} />
                                
                            <Route exact path="/enviado">
                                <SendMail
                                    clickHome = {this.props.clickHome} 
                                />
                            </Route>
                        </Switch>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}

export default Router; 