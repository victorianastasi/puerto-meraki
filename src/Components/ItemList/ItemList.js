import React from 'react';
import './ItemList.css';
import Item from '../Item/Item.js';
import { useParams } from 'react-router-dom';

const ItemList = ({ items }) => {
  const { categoryId } = useParams();
  
  if (categoryId === undefined){
    return (
      <div>
        <h2 className= "title-products">Nuestros Productos</h2>
        {items.map((item) => (
            <div key={item.id} className="products">
              <Item item={item} />
            </div>
        ))}
      </div>
    );
  }else{
    return (
      <div>
        <h2 className= "title-products"> Nuestros Productos</h2>
        <h4 className= "title-products category">{categoryId}</h4>
        {items.filter(item => item.category === categoryId).map((item) => (
            <div key={item.id} className="products">
              <Item item={item} />
            </div>
        ))}
      </div>
    );
  }
};

export default ItemList;
