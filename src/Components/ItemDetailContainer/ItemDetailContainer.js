import React from 'react';
import { useState } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import products from '../../assets/products.json';

const ItemDetailContainer = () => {
    const [itemsProducts, setItems] = useState([]);
   
    const getItems = () => {
        new Promise((result, reject) => {
            console.log('esperar 500ms');
            setTimeout(() => {
                result(products);
            }, 500);
        }).then((response) => setItems(response));
    }
    
    return (
        <div className="container-fluid body-bg">
        {getItems()}
            <h3 className="details-title">Detalles del Producto</h3>
            <ItemDetail itemsProducts={itemsProducts} />
        </div>
    )
}

export default ItemDetailContainer;
