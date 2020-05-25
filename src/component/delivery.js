import React, { Component } from 'react';

class Delivery extends Component {

    render(){
        const {id, image, name} = this.props.info
        return(

            <div className="col-6 col-md-3 px-1"> 
                <button className="btn delivery__btn" onClick={ () => this.props.checkDelivery(id)} >
                    <img className="img-fluid" src={"canjedelivery" + image} alt={name} />
                </button>

            </div>
        )
    }
}

export default Delivery; 