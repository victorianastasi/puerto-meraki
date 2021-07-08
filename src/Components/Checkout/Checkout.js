import React from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
    return (
        <div className="container-fluid body-bg checkout-container">
            <Link to="/cart" className=" btn btn-dark back-to-shop">Volver al carrito de compras</Link>
            <h3 className="checkout-title">Finaliza tu Compra</h3>
            <form className="checkout-form">
                <h5 className="form-title">Completa tus datos</h5>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"></input>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electrónico.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" className="form-control" id="phone" ></input>
                </div>
                <button type="submit" className="btn btn-secondary btn-form">Enviar orden de compra</button>
            </form>
        </div>
    )
}

export default Checkout;
