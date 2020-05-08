import React from 'react';

// import {Footer} from './footer';
import multipagoOferta from '../img/logo__oferta.png';
import delivery from '../img/img_delivery.png';
import hand from '../img/hand1.png';

import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <React.Fragment>
          <div className="row m-0">
            <div className="col-12 col-md-6 py-5 text-center">
              <img className="img-fluid" src={multipagoOferta} alt="Multipago ofertas" />
              <h3 className="text-uppercase text-white w-100 mt-5 home__text--header">
                <span className="enfasis">¡Anímate!</span> y canjea tus vales de consumo
              </h3>
              <p className="text-white w-100 d-block mb-5 home__text--p">para realizar tu pedido por medio de servicios de <span className="enfasis">DELIVERY</span></p>
              <div className="mx-auto w-100">
                <Link to="/scan" className="btn btn-success btn--canjea text-uppercase">
                  <img src={delivery} alt="" />Canjear</Link>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img className="img-fluid" src={hand} alt=""/>
            </div>
          </div>
        </React.Fragment>

        

    )
}

export default Home;