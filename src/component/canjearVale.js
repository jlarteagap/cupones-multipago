import React, { Component } from 'react';
import pedidosYa from '../img/delivery/logo_serv1.png';

class SeleccionarDelivery extends Component {
    render(){
        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card scan__card--inner">
                    <div className="card-body">
                        <h3 className="text-uppercase text-center font-weight-bold">Vale de consumo Válido</h3>
                        <div className="row py-4">
                            <div className="col-4 font--semibold">
                                <p>Nombre: <br />
                                Correo:<br />
                                Comercio: <br />
                                Monto del vale (Bs.):</p>
                            </div>
                            <div className="col-8">
                                <p className="coGray">Nombre del cliente asignado el vale<br />
                                Correo del cliente<br />
                                Nombre del comercio <br />
                                <span className="coBlue font--semibold">100.00</span> </p>
                            </div>
                        </div>
                            <div className="col-12">
                                <div className="row">
                                    <p className="font-weight-bold p-0 col-12">Selecciona el servicio de DELIVERY a utilizar</p>
                                <div className="col-6 col-md-3 px-1 pt-3">
                                    <img className="img-fluid" src={pedidosYa} alt="delivery" />
                                </div>
                                <div className="col-6 col-md-3 px-1 pt-3">
                                    <img className="img-fluid" src={pedidosYa} alt="delivery" />
                                </div>
                                <div className="col-6 col-md-3 px-1 pt-3">
                                    <img className="img-fluid" src={pedidosYa} alt="delivery" />
                                </div>
                                <div className="col-6 col-md-3 px-1 pt-3">
                                    <img className="img-fluid" src={pedidosYa} alt="delivery" />
                                </div>
                                <div className="col-6 col-md-3 px-1 pt-3">
                                    <img className="img-fluid" src={pedidosYa} alt="delivery" />
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