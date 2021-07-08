import React from 'react';
import { useState, useEffect } from "react";
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import products from '../../assets/products.json';
import BeatLoader from "react-spinners/BeatLoader";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        new Promise((result, reject) => {
            console.log('esperar 1 segundo');
            setTimeout(() => {
                result(products);
            }, 1500);
        }).then((response) => setItems(response));
    }, []);

    useEffect(() => {
        items.length && setLoading(false)
    }, [items]);

    return (
        <div className="container-fluid body-bg">
            <ItemList items={items}/>
            {loading ? <div className="loading"><BeatLoader color={"rgb(65, 235, 206)"} loading={loading} size={30} /></div> : null }
        </div>
    )
}

export default ItemListContainer;
