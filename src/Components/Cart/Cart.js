import React, { useContext } from 'react'
import './Cart.css';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';
import { FiShoppingCart } from 'react-icons/fi';
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clear, total } = useContext(CartContext);

    if(cart.length === 0){
         return(
            <div className="body-bg">
                <h3 className="cart-title">Carrito de Compras</h3>
                <div className="cart-empty">
                    <p className="cart-empty-text">Tu carrito de compras esta vacio </p>
                    <Link to="/" className=" btn btn-dark cart-empty-button">Ver los productos</Link>
                </div>
            </div>
        );
    }else{
        return (
            <div className="body-bg">
                <h3 className="cart-title">Carrito de Compras</h3>
                <div>
                    {cart.map((item, key) => <CartItem key={key} {...item} />)}
                    <div>
                        <p className="cart-total">Total: $ {total}</p>
                    </div>
                    <div className="row buttons-shop">
                        <Link to="/" className=" btn btn-info btn-shop"><ImArrowLeft2 /> Volver a los productos</Link>
                        <button className="btn btn-info btn-shop" onClick={() => clear()}>Vaciar Carrito <FiShoppingCart /></button>
                        <Link to="/checkout" className=" btn btn-info btn-shop">Finalizar Compra <ImArrowRight2 /></Link>
                    </div>
                </div>   
            </div>
        );
    }
}

export default Cart;
