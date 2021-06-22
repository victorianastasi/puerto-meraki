import React from 'react';
import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import products from '../../assets/products.json';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    
    let { id } = useParams();

    const [ product ] = products.filter( item => item.id === Number(id));

    useEffect(() => {
        new Promise((resolve, reject) => {
            console.log("esperar 0.5 segundo")
            setTimeout(() => {
                resolve(product);
            }, 500);
        }).then((result) => setItems(result))
    }, [product]);

    return (
        <div className="container-fluid body-bg">
            <h3 className="details-title">Detalles del Producto</h3>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;
