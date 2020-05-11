import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ScanQr extends Component {
    render(){
        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card scan__card--inner">
                    <div className="card-body">
                        <div className="card border-primary mb-4">
                            <div className="card-body scanQr py-5 mx-auto"></div>
                            {/* <div className="card-footer bg--blue text-center text-white">
                                Adjuntar QR
                            </div> */}
                        </div>
                        <form className="form-group mb-0">
                            <input className="form-control" type="text" placeholder="Código del vale" />
                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-12">
                                     <Link className="btn bg--green btn-block text-white btn-block" to="/seleccionar-delivery" onClick={ () => this.props.stepOne()} >Continuar</Link>
                                    </div>
                                </div>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScanQr; 