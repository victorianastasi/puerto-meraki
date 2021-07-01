import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ( { item, count, updateStock } ) => {
    const {addItem} = useContext(CartContext);

    const initial = 0;
    
    const [show, setShow] = useState(true);
    
    const [finalCount, setFinalCount] = useState(count);

    const endShop = () => {
        if (show){
            return(
                <div>
                    <ItemCount initial={initial} stock={item.stock} onAdd={addCart} price={item.price}/>
                </div>
            ); 
        }else{
            return(
                <div>
                    <p className="endText">Cantidad: {finalCount} - Precio total: $ {finalCount*item.price}</p>
                    <Link className="btn btn-primary endButton mt-2" to={'/cart'} >FINALIZAR COMPRA</Link>
                </div>
            ); 
        }
    }

    const addCart = (count) => {
        if (updateStock < count){
            console.log("No hay stock para la cantidad que quieres añadir");
        }else{
            if(count === 0){
                alert("La cantidad debe ser mayor a 0")
            }else {
                setShow(false);
                setFinalCount(count);
                addItem(item, count);
                alert(`Agregaste ${count} unidades de ${item.title}`);
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
                    {endShop()}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
