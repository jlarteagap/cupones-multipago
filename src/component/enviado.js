import React, { Component } from 'react'
import send from '../img/img_enviado.png'

class SendMail extends Component {
    render(){
        return(
            <div className="col-12 col-md-6 scan__card">  
                <div className="card scan__card--inner">
                    <div className="card-body vh-75">
                        <div className="text-center py-5">
                            <img className="mt-5" src={ send } alt="" />
                            <p className="pt-5">Tu solicitud de canje ha sido realizado con éxito. ¡Gracias por ayudar a tu restaurante favorito!</p>
                            <button className="btn bg--blue text-white mt-5">Salir</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SendMail; 