import { useParams } from 'react-router-dom';
import { DUMMY_DATA } from '../../Products/data';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import CartIcon from '../../../components/Cart/CartIcon';
import classes from './CartIconButton.module.css';

const ProductDetails = () => {
  const id = useParams();
  const cartCtx = useContext(CartContext);

  const itemDetails = DUMMY_DATA.filter((obj) => {
    return obj.id == id.productId;
  });

  const AddToCartHandler = (event) => {
    cartCtx.addItem({
      id: itemDetails[0].id,
      img: itemDetails[0].img,
      title: itemDetails[0].title,
      price: itemDetails[0].price,
      amount: 1,
    });
  };

  return (
    <div className="vh-100">
      <div className="d-flex my-5 mx-4 py-4 h-40 d-inline-block border ">
        <div className="m-2">
          <img className="img-fluid" alt="..." src={itemDetails[0].img} />
        </div>

        <div className="m-4 w-50 position-relative">
          <h3 className="m-1 fw-bold">{itemDetails[0].title}</h3>
          <div className="my-5">
            <span className="mx-2 fs-4">Price:</span>
            <span className="fs-4 fw-bold">EGY {itemDetails[0].price}</span>
          </div>

          <div>
            <button className={classes.button} onClick={AddToCartHandler}>
              <span className={classes.icon}>
                <CartIcon />
              </span>
              <span className={classes.title}>Add To Cart</span>
            </button>
          </div>
        </div>
        <div className={classes.br}></div>
      </div>
    </div>
  );
};

export default ProductDetails;
