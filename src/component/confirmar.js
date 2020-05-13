import React, { Component } from 'react';
import pedidosYa from '../img/delivery/logo_serv1.png';

import { Link } from 'react-router-dom';
class ConfirmarPedido extends Component {
    render(){
        return(
            <div className="col-12 col-md-6 scan__card">  
                <div className="card scan__card--inner">
                    <div className="card-body">
                        <div className="text-center">
                            <h3 className="text-uppercase font-weight-bold">Confirmación de canje</h3>
                            <div className="col-6 col-md-5 mx-auto py-5">
                                <img className="img-fluid" src={pedidosYa} alt="" />
                            </div>
                            <p className="font--semibold">Iniciará tu proceso de solicitud para el uso de tu vale de consumo por el monto de:</p>
                            <h4 className="coBlue py-3">Bs. 100.00</h4>
                            <p>Al confirmar tu solicitud, <strong>PEDIDOS YA</strong> te enviará el código correspondiente para que empieces a realizar tu pedido mediante su plataforma.</p>
                            <p><strong>Nota importante:</strong> El vale de consumo de multipago oferta es único, una vez realizada la confirmación quedará deshabilitado.</p>

                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-6">
                                        <Link className="btn bg--blue text-white btn-block" to="/seleccionar-delivery" onClick={ () => this.props.stepTwo()}>Cancelar</Link>
                                    </div>
                                     <div className="col-6">
                                        <Link to="/enviado" className="btn bg--green text-white btn-block">Confirmar</Link>
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

export default ConfirmarPedido;