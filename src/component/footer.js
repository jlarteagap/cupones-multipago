import React from 'react';
import multipago from '../img/multipago.png'

export const Footer = () => { 
    return(
       
            <div className="footer px-5 position-relative w-100">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                        <img className="img-fluid" src={multipago} alt="Multipago" />
                    </div>
                    <div className="col-12 col-md-6 text-right text-white copy">
                        Multipago © 2020. Todos los derechos reservados.
                    </div>
                </div>

            </div>
     
    )
}
