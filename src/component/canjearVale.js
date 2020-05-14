import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Delivery from './delivery';
class SeleccionarDelivery extends Component {

    state = {
        value: ''
    }


    render(){

        const {client, client_email, service, unit_price} = this.props.client;
        const deliverys = this.props.deliverys
        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card scan__card--inner">
                    <div className="card-body">
                        <h3 className="text-uppercase text-center font-weight-bold">Vale de consumo Válido</h3>
                        <div className="row py-4">
                            <div className="col-4 font--semibold">
                                <p>Nombre: </p>
                                <p>Correo:</p>
                                <p>Comercio: </p>
                                <p>Monto del vale (Bs.):</p>
                            </div>
                            <div className="col-8">
                                <p className="coGray">{client}</p>
                                <p className="coGray">{client_email}</p>
                                <p className="coGray">{service}</p>
                                <p className="coBlue font--semibold">{unit_price} </p>
                            </div>
                        </div>
                            <div className="col-12">
                                <div className="row">
                                    <p className="font-weight-bold p-0 col-12">Selecciona el servicio de DELIVERY a utilizar</p>
                                    <div className="d-flex justify-content-center py-3">
                                            {Object.keys(deliverys).map(delivery => (
                                                <Delivery
                                                    key = {delivery}
                                                    info = {this.props.deliverys[delivery]}
                                                    checkDelivery = {this.props.checkDelivery}
                                                />
                                            )) }
                                    </div>

                            </div>
                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-6 pl-0">
                                        <Link className="btn bg--blue text-white btn-block" to="/" onClick={ () => this.props.clickReset()}>Volver</Link>
                                    </div>
                                     <div className="col-6 pr-0">
                                     <Link className="btn bg--green text-white btn-block" to="/confirmar-pedido" onClick={ () => this.props.stepThree()}>Continuar</Link>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SeleccionarDelivery;