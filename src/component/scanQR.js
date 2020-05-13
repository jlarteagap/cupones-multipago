import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ScanQr extends Component {
    state = {
        inputData: '',
        error: false
    }
    
    inputScan = e => {
        this.setState({inputData: e.target.value})
    }

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
                        <form className="form-group mb-0" onSubmit={this.codeScan}>
                            <input className="form-control" type="text" placeholder="Código del vale" onChange={this.inputScan} />
                            <div className="col-12 px-0 pt-4">
                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn bg--green btn-block text-white btn-block">
                                            continuar
                                        </button>
                                        {this.state.error ? (<div className="alert alert-danger text-center mt-2">Ingrese un código valido</div>) : ('')}
                                     {/* <Link className="btn bg--green btn-block text-white btn-block" to="/seleccionar-delivery" onClick={ () => this.props.stepOne()} >Continuar</Link> */}
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