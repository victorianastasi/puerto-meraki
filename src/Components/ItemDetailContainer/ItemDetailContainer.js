import React from 'react';
import { useState } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import products from '../../assets/products.json';

const ItemDetailContainer = () => {
    const [itemsProducts, setItems] = useState([]);
   
    const getItems = () => {
        new Promise((result, reject) => {
            console.log('esperar 3 segundos');
          setTimeout(() => {
            result(products);
          }, 3000);
        }).then((response) => setItems(response));
    }
    
    return (
        <div className="container-fluid">
        {
            getItems()
        }
            <ItemDetail itemsProducts={itemsProducts}/>
        </div>
    )
}

export default ItemDetailContainer;
