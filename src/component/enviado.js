import React, { Component } from 'react'
import send from '../img/img_enviado.png'

import {Link } from 'react-router-dom'

class SendMail extends Component {
    render(){
        return(
            <div className="col-12 col-md-6 scan__card">  
                <div className="card scan__card--inner">
                <div className="card-body scan__card--inner d-flex align-items-center">
                        <div className="mx-auto">
                        <div className="text-center py-5">
                            <img className="mt-5" src={ send } alt="" />
                            <p className="pt-5">Tu solicitud de canje ha sido realizado con éxito. <br /> ¡Gracias por ayudar a tu restaurante favorito!</p>
                            <div className="col-6 mx-auto">
                                <Link className="btn btn-block bg--blue text-white mt-3" to="/" onClick={ () => this.props.clickHome()}>Salir</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendMail; 