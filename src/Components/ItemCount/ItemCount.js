import React, { useState } from "react";
/* import { BsFillPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs"; */
import { IoIosAdd, IoIosRemove } from "react-icons/io";
import { GoAlert } from "react-icons/go";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiErrorWarningFill } from "react-icons/ri";
import "./ItemCount.css";
import { Link } from "react-router-dom";

const ItemCount = ({ initial, stock, onAdd, price }) => {
  const [count, setCount] = useState(initial);

  const updateStock = stock - count;

  const [alertCount, setAlertCount] = useState(false);

  const [alertStock, setAlertStock] = useState(false);

  const removeAlert = (e) => {
    setAlertCount(false)
  };

  const addItemCount = (e) => {
    e.preventDefault();
    if (count < stock) {
      setCount(count + 1);
      setAlertCount(false);
    } else {
      setAlertStock(true);
    }
  };

  const removeItemCount = (e) => {
    e.preventDefault();
    if (count > initial) {
      setCount(count - 1);
      setAlertStock(false);
    } else {
      setAlertCount(true);
    }
  };

  if (stock === 0) {
    return (
      <div>
        <div className="alert-no-stock">
          <p className="mb-1">
            <GoAlert size={30} /> No hay stock de este producto
          </p>
        </div>
        <Link to={"/"} className="btn other-products mt-3">
          Ver otros productos <IoIosArrowDroprightCircle />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="product-card-unique">
        <div className="prod-amount">
          <p className="price">Precio: $ {count * price} </p>
          <div className="counter-button-container">
            <button
              className="counter-button"
              onClick={(count) => removeItemCount(count)}
            >
              <IoIosRemove className="counter-button-icon" />
            </button>
            <span className="amount">Cantidad: {count}</span>
            <button
              className="counter-button"
              onClick={(count) => addItemCount(count)}
            >
              <IoIosAdd className="counter-button-icon" />
            </button>
          </div>
          <p className="stock">Stock disponible: {updateStock}</p>
          <button
            className="btn btn-dark mt-2 mb-3"
            onClick={() => onAdd(count)}
          >
            Agregar al carrito
          </button>
            {alertCount && (
            <div className="alert alert-danger alert-count alert-dismissible fade show">
                <RiErrorWarningFill size={30} /> La cantidad no puede ser menor a 1
                <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => removeAlert()}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            )}
            {alertStock && (
            <div className="alert alert-danger alert-count">
                <RiErrorWarningFill size={30} /> No se pueden agregar más unidades
            </div>
            )}
        </div>
      </div>
    );
  }
};

export default ItemCount;
