import React from 'react';
import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import products from '../../assets/products.json';
import { useParams } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";

const ItemDetailContainer = () => {
    const [item, setItems] = useState({});
    
    let { id } = useParams();

    const [ product ] = products.filter( item => item.id === Number(id));

    const [loadDetail, setLoadDetail] = useState(true)
    
    useEffect(() => {
        new Promise((resolve, reject) => {
            console.log("esperar 0.5 segundo")
            setTimeout(() => {
                resolve(product);
            }, 500);
        }).then((result) => setItems(result))
    }, [product]);

    useEffect(() => {
        setTimeout(() => {
            setLoadDetail(false);
        }, 1000);
    })
    
    return (
        <div className="container-fluid body-bg">
            <h3 className="details-title">Detalles del Producto</h3>
            {loadDetail ?
                <div className="load-detail"><PuffLoader color={"rgb(255, 255, 255)"} loading={loadDetail} size={120} /></div>
                :
                <ItemDetail item={item} />
            }
        </div>
    )
}

export default ItemDetailContainer;
