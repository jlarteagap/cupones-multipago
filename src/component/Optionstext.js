import React, { Component } from 'react';
import check from '../img/check.png'

class OptionsText extends Component {

    render(){
        const {stepOne, stepTwo, stepThree} = this.props.steps;
        
        return(
            <React.Fragment>
                <div className={"step mt-5" + (stepOne ? (' step--selected') : ('') )} >
                    <div className="row">
                        <span className={"col-1 badge step--badge" + (stepOne ? (' step--badge--On') : ('') )}>1. </span>
                        <div className="col-9">Escanea tu QR o ingresa el código PIN de tu Vale</div>
                        <span className="col-2"><img className={(stepTwo || stepThree ? ('d-block') : ('d-none'))} src={check} alt="" /></span>
                    </div>
                </div>
                <div className={"step my-3" + (stepTwo ? (' step--selected') : ('') )}>
                    <div className="row">
                        <span className={"col-1 badge step--badge" + (stepTwo ? (' step--badge--On') : ('') )}>2. </span>
                        <div className="col-9">Selecciona el servicio de DELIVERY de tu preferencia</div>
                        <span className="col-2"><img className={(stepThree ? ('d-block') : ('d-none'))}src={check} alt="" /></span>
                    </div>
                </div>
                <div className={"step my-3 step3" + (stepThree ? (' step--selected') : ('') )}>
                    <div className="row">
                        <span className={"col-1 badge step--badge" + (stepThree ? (' step--badge--On') : ('') )}>3. </span>
                        <div className="col-9">Confirma el canje de tu vale</div>
                        <span className="col-2"><img className="d-none" src={check} alt="" /></span>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default OptionsText;