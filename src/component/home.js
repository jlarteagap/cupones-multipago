import React, { Component } from 'react';

// import {Footer} from './footer';

import hand from '../img/hand1.png';
import HomeText from './home__text';


class Home extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="col-12 col-md-10 mx-auto">
                    <div className="row row vh-100 d-flex align-items-center">
                        <div className="col-12 col-md-6">
                            <HomeText 
                            homeState = {this.props.homeState} />
                        </div>
                        <div className="col-12 col-md-6 vh-100 home__hand">
                            <img className="img-fluid home--img" src={hand} alt=""/>
                        </div>
                    </div>                                
                </div>
            </React.Fragment>

        

    )}
}

export default Home;