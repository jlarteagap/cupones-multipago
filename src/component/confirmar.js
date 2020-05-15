import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
class ConfirmarPedido extends Component {
  order = (id) => {
    const { ticket_id, service_id, pay_order_id } = this.props.client;

    const order = {
      ticket_id,
      service_id,
      delivery_id: id,
      pay_order_id,
    };

    this.props.orderConfirm(order);
    this.props.history.push("/enviado");
  };

  confirmarPedido = () => {
    if (!this.props.delivery) return (
        <div className="card-body scan__card--inner d-flex align-items-center">
            <div className="">
                <h3 className="text-uppercase text-center font-weight-bold">Seleccione un delivery</h3>
                    <p className="font--semibold text-center">Debe seleccionar un servicio de Delivery para continuar con el canje de su cupón</p>

                    <div className="col-12 px-0 pt-4">
                        <div className="row">
                            <div className="col-5 mx-auto">
                                <Link className="btn-block btn bg--blue text-white btn-block" to="/seleccionar-delivery" onClick={() => this.props.stepTwo()} >
                                    Volver
                                </Link>
                            </div>
                        </div>
                                    
                    </div>
                </div>
            </div>
    );
    const { id, image, name } = this.props.delivery;
    const { glosa } = this.props.client;
    return (
      <div className="card scan__card--inner">
        <div className="card-body">
          <h3 className="text-uppercase font-weight-bold">
            Confirmación de canje
          </h3>
          <div className="col-6 col-md-4 mx-auto py-5">
            <img className="img-fluid" src={image} alt="" />
          </div>
          <p className="font--semibold">
            Iniciará tu proceso de solicitud para el uso de tu vale de consumo por el monto de:
          </p>
          <h4 className="coBlue py-3">{glosa}</h4>
          <p>
            Al confirmar tu solicitud, <strong>{name}</strong> te enviará en transcurso de 24hrs. el código correspondiente para que empieces a realizar tu pedido mediante su plataforma.
          </p>
          <p>
            <strong>Nota importante:</strong> El vale de consumo de multipago oferta es único, una vez realizada la confirmación quedará deshabilitado.
          </p>

          <div className="col-12 px-0 pt-4">
            <div className="row">
              <div className="col-6">
                <Link
                  className="btn bg--blue text-white btn-block"
                  to="/seleccionar-delivery"
                  onClick={() => this.props.stepTwo()}
                >
                  Volver
                </Link>
              </div>
              <div className="col-6">
                <button
                  className="btn bg--green text-white btn-block"
                  onClick={() => this.order(id)}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="col-12 col-md-6 scan__card">
          <div className="card scan__card--inner">
            <div className="card-body">
              <div className="text-center">{this.confirmarPedido()}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(ConfirmarPedido);
