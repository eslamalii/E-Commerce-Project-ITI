import { NavLink } from 'react-router-dom';
import classes from './FilterItem.module.css';

const FilterItem = (props) => {
  return (
    <NavLink
      to={`/product/${props.id}`}
      style={({ isActive }) =>
        isActive
          ? {
              textDecoration: 'none',
              color: 'black',
            }
          : {
              textDecoration: 'none',
              color: 'black',
            }
      }
    >
      <div className={classes.card}>
        <div className={classes.item}>
          <div>
            <img className={classes.img} alt="..." src={props.img} />
          </div>

          <div className={classes.title} title={props.title}>
            <p>{props.title}</p>
          </div>

          <div className={classes.price}>
            <span className="mx-1">EGP</span>
            <strong>{props.price}</strong>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default FilterItem;
