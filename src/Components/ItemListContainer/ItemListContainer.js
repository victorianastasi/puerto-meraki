import React from 'react';
import { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import products from '../../assets/products.json';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

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
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;
