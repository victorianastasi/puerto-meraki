import React from 'react';
import './ItemList.css';
import Item from '../Item/Item.js';
import { useParams } from 'react-router-dom';

const ItemList = ({ items }) => {
  const { categoryId } = useParams();
  
  return (
    <div>
      <h2 className= "title-products"> Nuestros Productos</h2>
      {items.filter(item => item.category === categoryId).map((item, index) => (
          <div key={index} className="products">
            <Item item={item} />
          </div>
      ))}
    </div>
  );
};

export default ItemList;
