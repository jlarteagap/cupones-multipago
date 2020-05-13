import React, { Component } from 'react';
import pedidosYa from '../img/delivery/logo_serv1.png';
import { Link } from 'react-router-dom'
class SeleccionarDelivery extends Component {

    state = {
        value: ''
    }

    checkDelivery = (value) => {
        this.setState({
            value
        })
    }
    
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
                                        <button className="btn delivery__btn" onClick={ () => this.checkDelivery('value1')}><img className="img-fluid" src={pedidosYa} alt="delivery" /></button>
                                    </div>
                                    <div className="col-6 col-md-3 px-1 pt-3">
                                        <button className="btn delivery__btn" onClick={ () => this.checkDelivery('value2')}><img className="img-fluid img--check" src={pedidosYa} alt="delivery" /></button>
                                    </div>
                                    <div className="col-6 col-md-3 px-1 pt-3">
                                        <button className="btn delivery__btn" onClick={ () => this.checkDelivery('value3')}><img className="img-fluid img--check" src={pedidosYa} alt="delivery"/></button>
                                    </div>
                                    <div className="col-6 col-md-3 px-1 pt-3">
                                        <button className="btn delivery__btn" onClick={ () => this.checkDelivery('value4')}><img className="img-fluid img--check" src={pedidosYa} alt="delivery" /></button>
                                    </div>
                                    <div className="col-6 col-md-3 px-1 pt-3">
                                        <button className="btn delivery__btn" onClick={ () => this.checkDelivery('value5')}><img className="img-fluid img--check" src={pedidosYa} alt="delivery" /></button>
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