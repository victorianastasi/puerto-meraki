import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ( { item } ) => {
    
    const initial = 1;
    
    const[itemQuantity, setItems] = useState(initial);
    
    const[itemStock, setStock] = useState(10);
    
    const addItem = (e) => {
        e.preventDefault();
        itemQuantity < itemStock ? setItems(itemQuantity + 1) : alert("No se pueden agregar más unidades de este producto");
    }

    const removeItem = (e) => {
        e.preventDefault();
        itemQuantity > initial ? setItems(itemQuantity - 1) : alert("La cantidad no puede ser menor a 1");
    }

    const [show, setShow] = useState(true);
    
    const endShop = () => {
        if (show){
            return(
                <div>
                    <ItemCount stock={itemStock} value={itemQuantity} addItem={addItem} removeItem={removeItem}/>
                    <button className="btn btn-dark mt-2" onClick={addCart}>Agregar al carrito</button>
                </div>
            ); 
        }else{
            return(
                <div>
                    <Link className="btn btn-primary mt-2" to={'/cart'} >FINALIZAR COMPRA</Link>
                </div>
            ); 
        }
    }

    const addCart = () => {
        if (itemStock < itemQuantity){
            console.log("No hay stock para la cantidad que quieres añadir");
        }else{
            console.log(`Añadiste ${itemQuantity} unidades del producto ${item.title} al carrito`);
            setStock(itemStock - itemQuantity);
            setShow(false);
        }
    }

    return (
        <div>
            <div key={item.id} className="item-detail">
                <div className="item-detail-img">
                    <img src={item.pictureUrl} className="item-detail-picture" alt={item.title}/>
                </div>
                <div className="item-detail-text">
                    <p className="item-detail-title">{item.title}</p>
                    <p className="item-detail-description">Descripción: {item.description}</p>
                    <p>Precio: $ {item.price}</p>
                    {endShop()}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
