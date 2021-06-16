import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({item, items}) => {
    const onAdd = (i) => {
        alert(`Añadiste ${i} unidades del producto al carrito`);
    }
    return (
        <div className="product-card">
            <img src={item.pictureUrl} className="prod-img" alt={item.title}/>
            <p className="prod-title">{item.title}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    );
}

export default Item;
