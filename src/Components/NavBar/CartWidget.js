import './NavBar.css';
import { MdShoppingCart } from 'react-icons/md';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <MdShoppingCart className="cart-icon"/>
        </div>
    );  
};

export default CartWidget;