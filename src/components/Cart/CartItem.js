import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const amount = cartCtx.items.filter((item) => {
    return props.data.id == item.id;
  });

  return (
    <div className={classes.card}>
      <div>
        <img alt="..." className={classes.img} src={props.data.img} />
      </div>

      <div className="p-2 d-flex flex-column justify-content-between">
        <p>{props.data.title}</p>
        <p className="my-auto">
          Quantity: <strong>{amount[0].amount} </strong>{' '}
        </p>
        <div>
          <button onClick={props.onRemove} className={classes.button}>
            <img
              alt="..."
              src="https://z.nooncdn.com/s/app/com/noon/icons/trash.svg"
            />
            <span>Remove</span>
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default CartItem;
