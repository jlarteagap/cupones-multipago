import React, {Component} from 'react';

import multipagoOferta from '../img/logo__oferta.png'
import delivery from '../img/img_delivery.png';

class HomeText extends Component {

    render(){
    
        return (
          <div className="text-center home__text">
            <img src={ multipagoOferta } className="img-fluid d-block mx-auto" alt="" />
                
            <h3 className="text-uppercase text-white w-100 mt-5 home__text--header">
              <span className="enfasis">¡Anímate!</span> y canjea tus vales de
              consumo
            </h3>
            <p className="text-white w-100 d-block mb-5 home__text--p">
              para realizar tu pedido por medio de servicios de{" "}
              <span className="enfasis">DELIVERY</span>
            </p>
            <div className="mx-auto w-100">
              <button
                to="/scan"
                className="btn btn-success btn--canjea text-uppercase"
                onClick={ () => this.props.homeState()}
              >
                <img src={delivery} alt="" />
                Canjear
              </button>
            </div>
          </div>
        );
    }
}
export default HomeText; 