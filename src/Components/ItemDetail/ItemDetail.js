import React from 'react';
import './ItemDetail.css';

const ItemDetail = ( { itemsProducts } ) => {
    
    return (
        <div>
            {itemsProducts.map((item) => (
                <div className="item-detail">
                    <div className="item-detail-img">
                        <img src={item.pictureUrl} className="item-detail-picture" alt={item.title}/>
                    </div>
                    <div className="item-detail-text">
                        <p className="item-detail-title">{item.title}</p>
                        <p className="item-detail-description">Descripción: {item.description}</p>
                        <p className="item-detail-price">Precio: $ {item.price}</p>
                        <p className="item-detail-id">Id: #{item.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemDetail;
