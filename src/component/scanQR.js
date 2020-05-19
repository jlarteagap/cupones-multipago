import React, { Component } from 'react';
import Swal from 'sweetalert2'

import { withRouter } from 'react-router-dom';
import QrReader from 'react-qr-reader'

class ScanQr extends Component {
    state = {
        legacyMode: false,
        facingMode: "user",
        inputData: '',
        error: false,
        modal: 0
    }
     /* formulario del scanner */ 
    inputScan = e => {
        this.setState({inputData: e.target.value})  
    }


    /* enviar datos via post*/ 


    codeScan = e => {      
        e.preventDefault();
        const {inputData} = this.state
        
        if (inputData === ''){
            this.setState({
                error: true
            })
            return
        } else{ this.setState({error: false, inputData: ''})}

        const infoInput = {
            data: this.state.inputData,
        }

        this.props.codeScaner(infoInput);

        this.props.history.push("/seleccionar-delivery");
    }

      /* Scanner */ 
    QrScanner = data => {
        if (data) {
          this.setState({
            inputData: data,
          })

        }
        if(this.state.modal === 0 && this.state.inputData.length >= '16'){
            Swal.fire(
                'Código QR Correctamente!',
                'Se ha leído correctamente su código QR!',
                'success'
                )
            this.setState({
                modal: +1
            })
        }
      }
      ScanError = err => {
        this.setState(
            {legacyMode: true}
        )

      }

      openImageDialog() {
        this.refs.qrReader1.openImageDialog()
      }

      camaraButton = () =>{
        if(this.state.facingMode === "environment"){
            this.setState({
                facingMode: "user"
            })
        } else {
            this.setState({
                facingMode: "environment"
            })
        }
      }

    render(){


        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card ">
                    <div className="card-body scan__card--inner">
                        <div className="card border-primary mb-4">
                                <QrReader
                                ref="qrReader1"
                                delay={300}
                                onError={this.ScanError}
                                onScan = {this.QrScanner}
                                className = 'card-body scanQr py-5 mx-auto'
                                facingMode = {this.state.facingMode}
                                legacyMode = {this.state.legacyMode}
                                style = {{ width: '100%'}}
                                />

                            {this.state.legacyMode ? (<React.Fragment><div className="scanError text-center pb-2">No podemos acceder a su cámara, por favor adjuntar codigo QR</div><input type="button" className="btn card-footer bg--blue text-center text-white" value="Adjuntar QR" onClick={() =>this.openImageDialog()}  /></React.Fragment>): (<input type="button" className="btn card-footer camaraMovil bg--blue text-center text-white" value="Cambiar de camara" onClick={this.camaraButton}  />)}
   
                        </div>                      

                        <form className="form-group mb-0" onSubmit={this.codeScan}>
                            <input className="form-control" type="text" placeholder="Código del vale" onChange={this.inputScan} value={this.state.inputData}/>
                            {this.state.error ? (<div className="scanError">Ingrese un código valido</div>) : ('')}
                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn bg--green btn-block text-white btn-block">
                                            Continuar
                                        </button>
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

export default withRouter(ScanQr); 