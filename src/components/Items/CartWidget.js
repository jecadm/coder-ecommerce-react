import React from 'react';

const CartWidget = ({ count }) => {
  return (
    <div>
      <i className="fa fa-shopping-cart"></i>
      <span>{count}</span>
    </div>
  );
};

export default CartWidget;