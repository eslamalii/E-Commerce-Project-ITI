import { NavLink } from 'react-router-dom';
import classes from './CartNotFound.module.css';

const CartNotFound = () => {
  return (
    <div className={classes.card}>
      <img alt='...' src="https://z.nooncdn.com/s/app/com/noon/images/empty-state-cart.svg" />
      <p className={classes.main}>Your shopping cart looks empty</p>
      <p className={classes.text}>What are you waiting for?</p>
      <NavLink to={'./'}>
        <button className={classes.button}>Start Shopping</button>
      </NavLink>
    </div>
  );
};

export default CartNotFound;
