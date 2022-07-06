import CartContext from '../../store/cart-context';
import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartNotFound from '../ErrorHandler/CartNotFound';
import Checkout from './Checkout';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="px-0">
      {React.Children.toArray(
        cartCtx.items.map((item) => {
          return (
            <div className="d-flex">
              <CartItem
                data={item}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
              />
            </div>
          );
        })
      )}
    </ul>
  );
  return (
    <div className="container">
      {hasItems ? (
        <div className="row ">
          <div className="col-lg-8 col-md-12">{cartItems}</div>
          <div className="col-lg-4 col-md-12 vh-100">{<Checkout />}</div>
        </div>
      ) : (
        <CartNotFound />
      )}
    </div>
  );
};

export default Cart;
