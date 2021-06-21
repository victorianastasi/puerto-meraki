import React from 'react';
import './Item.css';
import ItemCount from '../ItemCount/ItemCount';
import { BsSearch  } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Item = ({item, items}) => {
    const onAdd = (i) => {
        alert(`Añadiste ${i} unidades del producto al carrito`);
    }
    return (
        <div className="product-card">
            <img src={item.pictureUrl} className="prod-img" alt={item.title}/>
            <p className="prod-title">{item.title}</p>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <Link to={`/item/${item.id}`} className="details-item-button btn" ><BsSearch /> Ver más</Link>
        </div>
    );
}

export default Item;
