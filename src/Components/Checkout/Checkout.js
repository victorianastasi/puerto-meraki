import React, { useContext, useState} from 'react';
import './Checkout.css';
import { FcUndo, FcRedo } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import {getFirestore} from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Checkout = () => {
    const { cart } = useContext(CartContext);

    const cartInfo = useContext(CartContext);

    const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });

    const inputData = (e) => {
        setUserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    };

    const db = getFirestore();

    const orders = db.collection("orders");
    const newOrder = {
        buyer : userInfo, 
        items : cart,
        date : firebase.firestore.Timestamp.fromDate(new Date()),
        total : cartInfo.total,
    };
    console.log(newOrder)
    console.log(orders)
    /* orders.add(newOrder).then(({id}) => {
        setOrderId(id);
    }).catch(err => {
        setError(err);
    }).finally(() => {
        setLoading(false);
    }) */

    return (
        <div className="container-fluid body-bg checkout-container">
            <Link to="/cart" className=" btn btn-dark back-to-shop">Volver al carrito de compras</Link>
            <h3 className="checkout-title">Finaliza tu Compra</h3>
            <form className="checkout-form">
                <h5 className="form-title">Completa tus datos</h5>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" onChange={inputData}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={inputData}></input>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electrónico.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" className="form-control" id="phone" onChange={inputData}></input>
                </div>
            </form>
            <h5 className="form-title check-title">Chequea tu Pedido</h5>
            <div className="row-items-checkout checkout-header">
                <p className="row-items-checkout-title">Producto</p>
                <p className="row-items-checkout-price">Precio</p>
                <p className="row-items-checkout-quantity">Cantidad</p>
                <p className="row-items-checkout-subtotal">Subtotal</p>
            </div>
            {cartInfo.cart.map(({ item, quantity }) => {
                return (
                    <div className="row-items-checkout checkout-data" key={item.title}>
                        <div className="row-items-checkout-title item-title-img">
                            <span><img src={item.pictureUrl} className="row-item-data-img" alt={item.title} /></span>
                            <span className="row-item-data-title">{item.title}</span>
                        </div>
                        <p className="row-items-checkout-price">$ {item.price}</p>
                        <p className="row-items-checkout-quantity">{quantity}</p>
                        <p className="row-items-checkout-quantity">$ {quantity * item.price}</p>                        
                    </div> 
                )
            })}
            <div className="row-items-checkout checkout-header checkout-total">
                <span>Total : $ {cartInfo.total}</span>
            </div>
            <div className="final-shop">
                <Link className="btn btn-secondary btn-form" to="/cart"><FcUndo size={25}/> Volver</Link>
                <button type="submit" className="btn btn-secondary btn-form">Enviar orden de compra <FcRedo size={25}/></button>
            </div>
        </div>
    )
}

export default Checkout;
