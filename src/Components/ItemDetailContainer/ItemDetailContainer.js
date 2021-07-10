import React from 'react';
import { useState, useEffect } from "react";
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import { useParams } from 'react-router-dom';
import PuffLoader from "react-spinners/PuffLoader";
import {getFirestore} from '../../firebase';

const ItemDetailContainer = () => {

    const [loadDetail, setLoadDetail] = useState(true);

    const [item, setItem] = useState({});

    let { id } = useParams();
  
    const getItem = (id) => {
      const db = getFirestore();
      db.collection("items")
        .doc(id)
        .get()
        .then((snapshot) => {
          setItem(snapshot.data());
          setLoadDetail(false);
        });
    };
  
    useEffect(() => {
      getItem(id);
    }, [id]);
    
    return (
        <div className="container-fluid body-bg">
            <h3 className="details-title">Detalles del Producto</h3>
            {loadDetail ?
                <div className="load-detail"><PuffLoader color={"rgb(255, 255, 255)"} loading={loadDetail} size={120} /></div>
                :
                <ItemDetail item={item} id={id}/>
            }
        </div>
    )
}

export default ItemDetailContainer;
