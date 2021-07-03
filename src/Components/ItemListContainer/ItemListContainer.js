import React from 'react';
import { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import products from '../../assets/products.json';

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        new Promise((result, reject) => {
            console.log('esperar 1 segundo');
            setTimeout(() => {
                result(products);
            }, 1000);
        }).then((response) => setItems(response));
    }, []);

    useEffect(() => {
        items.length && setLoading(false)
    }, [items]);

    return (
        <div className="container-fluid body-bg">
            <h3 className="greeting-title">{greeting}</h3>
            <ItemList items={items}/>
            {loading ? <div className="spinner-border loading"></div> : null }
        </div>
    )
}

export default ItemListContainer;
