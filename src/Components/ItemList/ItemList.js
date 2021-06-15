import React from 'react';
import './ItemList.css';
import Item from '../Item/Item.js';

const ItemList = ({ items }) => {
    return (
      <div>
        <h2 className= "title-products"> Nuestros Productos</h2>
        {items.map((item) => (
            <div className="products">
              <Item key={item.id} item={item} />
            </div>
        ))}
      </div>
    );
  };

export default ItemList;
