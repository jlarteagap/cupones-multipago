import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import QrReader from 'react-qr-scanner'

class ScanQr extends Component {
    state = {
        inputData: '',
        error: false
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
        } else{ this.setState({error: false})}

        const infoInput = {
            data: this.state.inputData
        }

        this.props.codeScaner(infoInput);

        this.props.history.push("/seleccionar-delivery");
    }

      /* Scanner */ 
    QrScanner = data => {
        if (data) {
          this.setState({
            inputData: data
          })
        }
      }
      ScanError = err => {
        console.error(err)
      }


    render(){
        return(
            <div className="col-12 col-md-6 scan__card">
                <div className="card ">
                    <div className="card-body scan__card--inner">
                        <div className="card border-primary mb-4">
                            
                            <QrReader 
                                delay = {500}
                                onError={this.ScanError}
                                onScan = {this.QrScanner}
                                className = 'card-body scanQr py-5 mx-auto'
                                style={{ width: '100%' }}
                            />
                            {/* <div className="card-footer bg--blue text-center text-white">
                                Adjuntar QR
                            </div> */}
                        </div>
                        <form className="form-group mb-0" onSubmit={this.codeScan}>
                            <input className="form-control" type="text" placeholder="Código del vale" onChange={this.inputScan} value={this.state.inputData}/>
                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn bg--green btn-block text-white btn-block">
                                            Continuar
                                        </button>
                                        {this.state.error ? (<div className="scanError">Ingrese un código valido</div>) : ('')}

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