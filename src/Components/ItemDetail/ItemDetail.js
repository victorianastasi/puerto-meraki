import React from 'react';
import './ItemDetail.css';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ( { itemsProducts } ) => {
    const { id } = useParams();

    return (
        <div>
        {itemsProducts.filter(item => item.id === Number(id)).map((item)=>(
            <div key={item.id} className="item-detail">
                <div className="item-detail-img">
                    <img src={item.pictureUrl} className="item-detail-picture" alt={item.title}/>
                </div>
                <div className="item-detail-text">
                    <p className="item-detail-title">{item.title}</p>
                    <p className="item-detail-description">Descripción: {item.description}</p>
                    <ItemCount initial={1} stock={item.stock} itemTitle={item.title} itemImg={item.pictureUrl} itemPrice={item.price}/>
                </div>
            </div>
        ))}
        </div>
    );
}

export default ItemDetail;
