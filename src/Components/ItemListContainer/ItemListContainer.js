import React from 'react';
import { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList.js';
import products from '../../assets/products.json';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    const onAdd = (i) => {
        alert(`Añadiste ${i} unidades del producto al carrito`);
    }
    useEffect(() => {
        new Promise((result, reject) => {
            console.log('esperar 2 segundos');
          setTimeout(() => {
            result(products);
          }, 2000);
        }).then((response) => setItems(response));
    }, []);

    return (
        <div className="container-fluid">
            <h3 className="item-list-title">{greeting}</h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
