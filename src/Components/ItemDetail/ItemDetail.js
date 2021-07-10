import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ( { item, count, updateStock, id } ) => {
    
    const {addItem, isInCart} = useContext(CartContext);

    const initial = 0;
    
    const [finalCount, setFinalCount] = useState(count);

    const [MsgAddSuccess, setMsgAddSuccess] = useState(false);
    
    const [EndShop, setEndShop] = useState(false);
    
    const checkShop = () => {
        if((isInCart(id) && EndShop) || (isInCart(id) === false && EndShop)){
            return(
                <div>
                    <p className="endText">Cantidad: {finalCount} - Precio total: $ {finalCount*item.price}</p>
                    <Link className="btn btn-primary endButton mt-2" to={'/cart'} >VER EL CARRITO</Link>
                    {MsgAddSuccess && 
                        <div className="msg-add">
                        <p className="msg-add-text">Agregaste el producto {item.title} al Carrito de Compras</p> 
                        </div>}
                </div>
            ); 
        }else{
            if(isInCart(id) === true && EndShop === false){
                return(
                    <div className="check-cart">
                        <p className="check-cart-text">El producto {item.title} ya se encuentra en el Carrito de compras</p>
                        <Link className="btn btn-check-cart mt-2" to={'/'} >Ver otros Productos</Link>
                    </div>
                );
            }else{
                return(
                    <div>
                        <ItemCount initial={initial} stock={item.stock} onAdd={addCart} price={item.price} />
                    </div>
                );
            }
        } 
    }
    
    const addCart = (count) => {
        if (updateStock < count){
            alert("No hay stock para la cantidad que quieres añadir");
        }else{
            if(count === 0){
                alert("La cantidad debe ser mayor a 0");
            }else{
                    setFinalCount(count);
                    addItem(item, count, id);
                    setMsgAddSuccess(true);
                    setEndShop(true);
                }
        }
    };

    return (
        <div>
            <div key={item.id} className="item-detail">
                <div className="item-detail-img">
                    <img src={item.pictureUrl} className="item-detail-picture" alt={item.title}/>
                </div>
                <div className="item-detail-text">
                    <p className="item-detail-title">{item.title}</p>
                    <p className="item-detail-description">Descripción: {item.description}</p>
                    <p>Precio por unidad: $ {item.price}</p>
                    {checkShop()}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
