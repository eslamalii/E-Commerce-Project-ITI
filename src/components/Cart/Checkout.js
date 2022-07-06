import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import classes from './Checkout.module.css';

const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const items = cartCtx.items.length;

  return (
    <div className={classes.card}>
      <div className="d-flex flex-column p-3">
        <h3>Order Summary</h3>
        <div>
          <p className="d-flex justify-content-between">
            Subtotal ({items} {items > 1 ? 'items' : 'item'} )
            <span>EGY {cartCtx.totalAmount}</span>
          </p>
          <p className="d-flex justify-content-between">
            Shipping <p>Free</p>
          </p>
          <div className={classes.br}></div>

          <p className="d-flex justify-content-between my-3">
            Total
            <span>
              <strong>EGY {cartCtx.totalAmount}</strong>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
