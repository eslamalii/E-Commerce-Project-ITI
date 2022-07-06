import CartIcon from '../../Cart/CartIcon';
import classes from './CartButton.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <NavLink
      to={'/cart'}
      style={({ isActive }) =>
        isActive
          ? {
              textDecoration: 'none',
            }
          : {
              height: '0px',
              textDecoration: 'none',
            }
      }
    >
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.badge}>{numberOfItems}</span>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
      </button>
    </NavLink>
  );
};

export default CartButton;
