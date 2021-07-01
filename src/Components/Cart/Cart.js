import React, {useContext} from 'react'
import './Cart.css';
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem"; 
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, clear } = useContext(CartContext);

    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        total = total + cart[i].item.price * cart[i].quantity;
    }

    if(cart.length === 0){
         return(
            <div className="body-bg">
                <h3 className="cart-title">Carrito</h3>
                <div className="cart-empty">
                    <p className="cart-empty-text">Tu carrito de compras esta vacio </p>
                    <Link to="/" className=" btn btn-dark cart-empty-button">Ver los productos</Link>
                </div>
            </div>
        );
    }else{
        return (
            <div className="body-bg">
                <h3 className="cart-title">Carrito</h3>
                <div>
                    {cart.map((item, key) => <CartItem key={key} {...item} />)}
                    <div>
                        <p className="cart-total">Total: $ {total} </p>
                    </div>
                    <div className="row buttons-shop">
                        <button className="btn btn-info btn-shop" onClick={() => clear()}>Vaciar Carrito</button>
                        <Link to="/" className=" btn btn-info btn-shop">Volver a los productos</Link>
                    </div>
                </div>   
            </div>
        );
    }

}

export default Cart;
