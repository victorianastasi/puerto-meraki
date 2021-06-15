import React from 'react';
import './Item.css';

const Item = ({item, items}) => {
    const onAdd = () => {
        alert("Gracias por tu compra!");
      };
    return (
        <div className="product-card">
            <img src={item.pictureUrl} className="prod-img" alt={item.title}/>
            <p className="prod-title">{item.title}</p>
            <p className="prod-price">$ {item.price}</p>
            <p className="prod-id">Id: {item.id}</p>
            <button className="btn btn-dark mt-2" onClick={() => onAdd(items)}>Agregar al carrito</button>
        </div>
    );
}

export default Item;
