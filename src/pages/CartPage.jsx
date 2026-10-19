import React from 'react';
import CartItem from '../components/CartItem';

function CartPage({ products, removeFromCart }) {
  const total = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>* Your Items</h2>
      {products.length === 0 ? (
        <p>
          * You have no items.
            <br />
          * You put a little feeling into the cart.
          </p>
      ) : (
        products.map((item, index) => (
          <CartItem
            key={index}
            name={item.title}
            price={item.price}
            onRemove={() => removeFromCart(index)}
          />
        ))
      )}
      <p className="cart-total">Total: ${total}</p>
    </div>
  );
}

export default CartPage;