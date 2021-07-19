import React, { useContext, useState, useEffect} from 'react';
import './Checkout.css';
import { FcUndo, FcRedo, FcApproval } from 'react-icons/fc';
import { ImArrowLeft2 } from 'react-icons/im';
import { GoAlert } from 'react-icons/go';
import PropagateLoader from "react-spinners/PropagateLoader";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import { getFirestore } from '../../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const Checkout = () => {
    const cartInfo = useContext(CartContext);

    const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });
    
    const [alertData, setAlertData] = useState(false);

    const [newOrder, setNewOrder] = useState({});

    const [orderId, setOrderId] = useState('');

    const [loadEnd, setLoadEnd] =useState(false);

    const [loadCheckout, setLoadCheckout] =useState(false);

    const inputData = (e) => {
        setAlertData(false)
        setUserInfo({
        ...userInfo,
        [e.target.id]: e.target.value,
      });
    };

    useEffect(() => {
        setNewOrder({
            buyer : userInfo, 
            items : cartInfo.cart,
            date : firebase.firestore.Timestamp.fromDate(new Date()),
            total : cartInfo.total,
        })
    }, [userInfo, cartInfo.cart, cartInfo.total])

    const handlerShop = () => {
        if(userInfo.name === "" || userInfo.phone === "" || userInfo.email === ""){
            setAlertData(true);
        }else{
            setLoadEnd(true);
            setLoadCheckout(true);
            const db = getFirestore();
            const orders = db.collection("orders");
            orders
            .add(newOrder)
            .then(({ id }) => {
                setOrderId(id);
                let batch = db.batch();
                const itemsDb = db.collection("items");
                cartInfo.cart.forEach((item) => {
                    batch.update(itemsDb.doc(item.id), {stock: (item.item.stock - item.quantity) })
                })
                batch.commit().then(() => {
                    cartInfo.clear();
                    setLoadEnd(false);
                });
            })
            .catch(err => {
                console.log("Ocurrio un error", err)
            })
        }
    };

    if(loadCheckout){
        if(loadEnd){
            return(
                <div className="container-fluid body-bg body-checkout">
                    <div className="load-end"><PropagateLoader color={"rgb(7, 197, 194)"} loading={loadEnd} size={20} /></div>
                </div>
            )
        }else{
            return(
                <div className="container-fluid body-bg body-checkout">
                    <div className="success-shop">
                        <h5 className="form-title check-title">Tu Pedido fue realizado con éxito!</h5>
                        <FcApproval size={80}/>
                        <p className="success-shop-text mt-3 mb-0">Gracias por tu pedido!</p>
                        <p className=" mt-3 mb-1">El número de tu orden es:</p>
                        <p><strong>{orderId}</strong></p>
                        <p>En breve nos contactaremos con vos!</p>
                        <Link to='/' className="btn btn-light btn-form">Ir al inicio</Link>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="container-fluid body-bg checkout-container">
            <Link to="/cart" className=" btn btn-dark back-to-shop"><ImArrowLeft2 /> Volver al carrito de compras</Link>
            <h3 className="checkout-title">Finaliza tu Compra</h3>
            <form className="checkout-form">
                <h5 className="form-title">Completa tus datos</h5>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" className="form-control" id="name" onChange={inputData} required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={inputData} required></input>
                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo electrónico.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" className="form-control" id="phone" onChange={inputData} required></input>
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
                <button type="submit" className="btn btn-secondary btn-form" onClick={handlerShop}>
                Enviar orden de compra <FcRedo size={25}/></button>
            </div>
            {alertData && 
                <div className="alert alert-danger alert-data mt-1 mb-1">
                    <p className="mb-1"><GoAlert size={40} /></p> 
                    <p className="mb-1 alert-data-text">Completa todos tus datos </p> 
                    <p className="mb-1">(Nombre, Correo electrónico y Teléfono)</p> 
                </div>
            }
        </div>
    )
}

export default Checkout;
