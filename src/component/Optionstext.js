import React from 'react';

const OptionsText = () => {
    return(
        <React.Fragment>
            <div className="step step--selected mt-5">
                <span class="badge badge badge-success mr-3 step--badge">1. </span>Escanea tu QR o ingresa el código PIN de tu Vale
            </div>
            <div className="step my-5 step--no--selected">
                 <span class="">2. </span> Selecciona el servicio de DELIVERY de tu preferencia
            </div>
            <div className="step mb-5 step--no--selected">
                <span class="">3. </span> Confirma el canje de tu vale
            </div>
        </React.Fragment>
    )
}

export default OptionsText;