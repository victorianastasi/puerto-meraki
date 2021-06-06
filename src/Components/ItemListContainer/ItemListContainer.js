import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({greeting}) => {
    const onAdd = (i) => {
        alert(`Añadiste ${i} unidades del producto al carrito`);
    }
    
    return (
        <div>
            <h3 className="item-list-title">{greeting}</h3>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;
