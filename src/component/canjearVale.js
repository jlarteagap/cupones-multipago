import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Delivery from './delivery';
class SeleccionarDelivery extends Component {

    state = {
        value: false
    }

    dataClient = () => {
        const status =this.props.status 
        const {client, client_email, service, glosa} = this.props.client;
        const deliverys = this.props.deliverys


        if (status === "OK") {
            return(
                <React.Fragment>
                    <div className="card-body scan__card--inner">
                        <h3 className="text-uppercase text-center font-weight-bold">Vale de consumo Válido</h3>
                        <div className="row pt-4">
                            <div className="col-12 p-0">
                                <div className="row">
                                    <div className="col-4 font--semibold pt-2">Nombre:</div> <div className="col-8 coGray">{client}</div>
                                    <div className="col-4 font--semibold pt-2">Correo:</div> <div className="col-8 coGray">{client_email}</div>
                                    <div className="col-4 font--semibold pt-2">Comercio:</div> <div className="col-8 coGray">{service}</div>
                                    <div className="col-4 font--semibold pt-2">Vale por:</div> <div className="col-8 coGray font--semibold">{glosa}</div>
                                </div>
                            </div>
                        </div>
                            <div className="col-12 mt-4 p-0">
                                <div className="row">
                                    <p className="font-weight-bold p-0 col-12">Selecciona el servicio de DELIVERY a utilizar</p>
                                    <div class="py-3 col-12">
                                        <div className="row">
                                            {Object.keys(deliverys).map(delivery => (
                                                <Delivery
                                                    key = {delivery}
                                                    info = {this.props.deliverys[delivery]}
                                                    checkDelivery = {this.props.checkDelivery}
                                                />
                                            )) }
                                        </div>
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
                </React.Fragment>
            )
        } 

        if(status === "ERROR"){

                return(
                    <React.Fragment>
                        <div className="card-body scan__card--inner d-flex align-items-center">
                            <div className="">
                                <h3 className="text-uppercase text-center font-weight-bold">Vale de consumo Inválido</h3>
                                <p className="font--semibold text-center">El código del vale de consumo no es válido o se encuentra deshabilitado porque ya ha sido utilizado.</p>
                                <p className="text-center">Si necesitas ayuda o consulta sobre el servicio no dudes en contactarnos, estaremos gustosos de atenderte.</p>
    
                                <div className="col-12 px-0 pt-4">
                                    <div className="row">
                                        <div className="col-12">
                                            <Link className="btn bg--green text-white btn-block" to="/" >Escanear QR</Link>
                                        </div>
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )

        }
    }

    render(){
        const loading = this.props.loading
        let result; 

        if(loading){
            result = <div class="spinner">
                     <div class="double-bounce1"></div>
                     <div class="double-bounce2"></div>
                     </div>

        } else {
            result = this.dataClient()
        }

        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card">
                    <div className="card-body scan__card--inner d-flex align-items-center">
                        {result}
                    </div>
                </div>
            </div>
        )
    }
}

export default SeleccionarDelivery;