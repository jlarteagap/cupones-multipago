import React from 'react';

// import {Footer} from './footer';

import hand from '../img/hand1.png';

// import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <React.Fragment>
            <div className="col-12 col-md-6 pt-5">
              <img className="img-fluid" src={hand} alt=""/>
            </div>
        </React.Fragment>

        

    )
}

export default Home;