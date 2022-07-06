import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div>
      <div className="product">
        <div>
          <img alt="..." src={props.img} />
        </div>

        <div className="text__Containar" title={props.title}>
          <p className="product__title">{props.title}</p>
        </div>

        <div className="product__price">
          <span className="mx-1">EGP</span>
          <strong>{props.price}</strong>
        </div>
      </div>
    </div>
  );
};

export default Product;
