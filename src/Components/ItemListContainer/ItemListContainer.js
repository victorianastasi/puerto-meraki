import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList.js';
import BeatLoader from "react-spinners/BeatLoader";
import {getFirestore} from '../../firebase';

const ItemListContainer = () => {

    const [loading, setLoading] = useState(true);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("items");
        itemCollection.get()
        .then((querySnapshot) => {
            let arrayItems = querySnapshot.docs.map((doc) => {
                return {
                  id: doc.id,
                  ...doc.data(),
                };
              });
            setItems(arrayItems)
        }).catch((error) => {
            console.log(`error en resultados ${error}`)
        }).finally(() => {
            setLoading(false)
        });
    }, []);
    
    return (
        <div className="container-fluid body-bg" key={items}>
            {loading ? 
                <div className="loading"><BeatLoader color={"rgb(65, 235, 206)"} loading={loading} size={30} /></div>
                :
                <ItemList items={items} />
            }
        </div>
    )
}

export default ItemListContainer;
