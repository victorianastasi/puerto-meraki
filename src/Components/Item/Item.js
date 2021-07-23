import React from 'react';
import './Item.css';
import { BsSearch  } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    
    return (
        <div className="product-card">
            <img src={item.pictureUrl} className="prod-img" alt={item.title}/>
            <p className="prod-title">{item.title}</p>
            <Link to={`/item/${item.id}`} className="details-item-button btn" ><BsSearch /> Ver más</Link>
        </div>
    );
}

export default Item;
