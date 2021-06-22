import React, { useState, useEffect } from 'react';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { BsFillDashCircleFill } from 'react-icons/bs';
import './ItemCount.css';
import { Link } from 'react-router-dom';

const ItemCount = ({initial, stock, itemTitle, itemImg, itemPrice}) => {
    const[itemQuantity, setItems] = useState(initial);
    const[itemStock, setStock] = useState(stock);
    const[priceTotal, setPrice] =useState(itemPrice);
    
    const priceUpdate = () =>{
        setPrice(itemPrice*itemQuantity);
    }
    useEffect(() => {
        priceUpdate();
    });

    const [show, setShow] = useState(false);
    const endShop = () =>{
        setShow(true);
    }

    const addItem =  () => {
        itemQuantity < stock ? setItems(itemQuantity + 1) : alert("No se pueden agregar más unidades de este producto");
         setShow(false);        
    }

    const removeItem = () =>{
        itemQuantity > initial ? setItems(itemQuantity - 1) : alert("La cantidad no puede ser menor a 1");
        setShow(false);
    }

    const onAdd = () => {
        if (itemStock < itemQuantity){
            console.log("No hay stock para la cantidad que quieres añadir");
        }else{
            console.log(`Añadiste ${itemQuantity} unidades del producto ${itemTitle} al carrito`);
            setStock(itemStock - itemQuantity);
            endShop();
        }
    }
    const shopItem = [itemTitle, priceTotal, itemImg, itemQuantity];
    console.log(shopItem);

    return (
        <div className="product-card-unique">
            <p>Stock: {itemStock}</p>
            <p>Precio: $ {priceTotal}</p>
            <div className="prod-amount">
                <BsFillDashCircleFill className="counter-button" onClick={removeItem}/>
                <span className="amount">Cantidad: {itemQuantity}</span>
                <BsFillPlusCircleFill className="counter-button" onClick={addItem}/>
            </div>
            <button className="btn btn-dark mt-2" onClick={onAdd}>Agregar al carrito</button>
            {
                show?<Link className="btn btn-primary mt-2" to={'/cart'} >FINALIZAR COMPRA</Link>: null
            }
        </div>
    );
}

export default ItemCount;
