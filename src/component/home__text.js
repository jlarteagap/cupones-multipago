import React, {Component} from 'react';

import delivery from '../img/img_delivery.png';

import {Link} from 'react-router-dom';

class HomeText extends Component {

    render(){
    
        return (
          <div className="text-center">
            <h3 className="text-uppercase text-white w-100 mt-5 home__text--header">
              <span className="enfasis">¡Anímate!</span> y canjea tus vales de
              consumo
            </h3>
            <p className="text-white w-100 d-block mb-5 home__text--p">
              para realizar tu pedido por medio de servicios de{" "}
              <span className="enfasis">DELIVERY</span>
            </p>
            <div className="mx-auto w-100">
              <Link
                to="/scan"
                className="btn btn-success btn--canjea text-uppercase"
                onClick={ () => this.props.homeState()}
              >
                <img src={delivery} alt="" />
                Canjear
              </Link>
            </div>
          </div>
        );
    }
}
export default HomeText; 