import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from 'react-icons/io';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


const ItemDetail = ( { item, count, id } ) => {
    
    const {addItem, isInCart} = useContext(CartContext);

    const initial = 1;
    
    const [finalCount, setFinalCount] = useState(count);
    
    const [EndShop, setEndShop] = useState(false);
    
    const checkShop = () => {
        if((isInCart(id) && EndShop) || (isInCart(id) === false && EndShop)){
            return(
                <div>
                    <Link className="btn button-detail end-button mt-2 mb-2" to={'/cart'} >VER EL CARRITO <IoIosArrowDroprightCircle size={25}/></Link>
                    <Link className="btn button-detail continue-button mt-2" to={'/'} ><IoIosArrowDropleftCircle size={25} /> CONTINUAR COMPRANDO</Link>
                    <div className="msg-add">
                        <p className="msg-add-text pb-0 mb-0">Agregaste el producto {item.title} al Carrito de Compras</p> 
                        <p className="msg-add-text pt-0 mt-0">Cantidad: {finalCount} - Precio total: $ {finalCount*item.price}</p>
                    </div>
                </div>
            ); 
        }else{
            if(isInCart(id) === true && EndShop === false){
                return(
                    <div className="check-cart">
                        <p className="check-cart-text">El producto {item.title} ya se encuentra en el Carrito de compras</p>
                        <Link className="btn btn-check-cart mt-2" to={'/'} >Ver otros Productos</Link>
                    </div>
                );
            }else{
                return(
                    <div>
                        <ItemCount initial={initial} stock={item.stock} onAdd={addCart} price={item.price} />
                    </div>
                );
            }
        } 
    }
   
    const addCart = (count) => {
        setFinalCount(count);
        addItem(item, count, id);
        setEndShop(true);
    };

    return (
        <div>
            <div key={item.id} className="item-detail">
                <div className="item-detail-img">
                    <img src={item.pictureUrl} className="item-detail-picture" alt={item.title}/>
                </div>
                <div className="item-detail-text">
                    <p className="item-detail-title">{item.title}</p>
                    <p className="item-detail-description">Descripción: {item.description}</p>
                    {checkShop()}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
